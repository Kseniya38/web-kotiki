const ApiError = require('../error/ApiError')
const {User, Credential} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const TOKEN_EXPIRES_DEFAULT = '24h'
const TOKEN_EXPIRES_KILL = 0

const generateJwt = (id, telephone, role, expiresIn) => {
    return jwt.sign(
        {id, telephone, role},
        process.env.SECRET_KEY,
        {expiresIn}
    )
}

class UserController {
    async registration(req, res, next) {
        const {name,
            surname,
            telephone,
            email,
            social_media,
            role,
            password} = req.body
        if (!telephone || !password) {
            return next(ApiError.badRequest('Некорректный номер телефона или пароль'))
        }
        const candidate = await User.findOne({where: {telephone}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким номером телефона уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({
            name,
            surname,
            telephone,
            email,
            social_media,
            roleId: role
            })
        await Credential.create({password: hashPassword, userId: user.id})
        const token = generateJwt(user.id, user.telephone, user.role, TOKEN_EXPIRES_DEFAULT)
        return res.json({token})
    }

    async login(req, res, next) {
        const {telephone, password} = req.body
        const user = await User.findOne({where: {telephone}})
        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        const userId = user.id
        const credential = await Credential.findOne({where: {userId}})
        let comparePassword = bcrypt.compareSync(password, credential.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.telephone, user.role, TOKEN_EXPIRES_DEFAULT)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.telephone, req.user.role, TOKEN_EXPIRES_DEFAULT)
        return res.json({token})
    }

    async update(req, res, next) {
        const { id } = req.params
        const { name, surname, telephone, email, social_media, role, password } = req.body

        try {
            const user = await User.findByPk(id)
            if (!user) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }

            const updatedFields = {}
            if (name) updatedFields.name = name
            if (surname) updatedFields.surname = surname
            if (telephone) updatedFields.telephone = telephone
            if (email) updatedFields.email = email
            if (social_media) updatedFields.social_media = social_media
            if (role) updatedFields.roleId = role

            await User.update(updatedFields, { where: { id } })

            if (password) {
                const hashPassword = await bcrypt.hash(password, 5)
                const userId = id
                const [updatedCredentials] = await Credential.update({ password: hashPassword }, { where: { userId } })

                if (updatedCredentials !== 1) {
                    return next(ApiError.badRequest('Учетные данные не найдены'))
                }
            }

            const token = generateJwt(user.id, user.telephone, user.role, TOKEN_EXPIRES_DEFAULT)
            return res.json({ message: 'Данные пользователя успешно обновлены', token })

        } catch (error) {
            return next(ApiError.internal(error.message))
        }
    }

    async getOne(req, res, next) {
        const {id} = req.params
        try {
            const user = await User.findByPk(id)
            if (!user) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }
            return res.json(user)
        } catch (error) {
            return next(ApiError.internal(error.message))
        }
    }

    async logout(req, res, next) {
        const {id} = req.params
        try {
            const user = await User.findByPk(id)
            if (!user) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }
            const expiredToken = generateJwt(req.user.id, req.user.telephone, req.user.role, TOKEN_EXPIRES_KILL)
            res.cookie('token', expiredToken, { expires: new Date(0) })
            return res.json({ message: 'Пользователь успешно разлогинен' })
        } catch (error) {
            return next(ApiError.internal(error.message))
        }
    }
}

module.exports = new UserController()