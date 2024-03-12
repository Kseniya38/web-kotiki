const ApiError = require('../error/ApiError')
const {User, Credential} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, telephone, role) => {
    return jwt.sign(
        {id, telephone, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
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
        const credential = await Credential.create({password: hashPassword, userId: user.id})
        const token = generateJwt(user.id, user.telephone, user.role)
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
        const token = generateJwt(user.id, user.telephone, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.telephone, req.user.role)
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

            if (name) user.name = name
            if (surname) user.surname = surname
            if (telephone) user.telephone = telephone
            if (email) user.email = email
            if (social_media) user.social_media = social_media
            if (role) user.roleId = role
            await user.save()

            if (password) {
                const hashPassword = await bcrypt.hash(password, 5)
                const userId = id
                const credentials = await Credential.findOne({ where: { userId } })
                if (!credentials) {
                    return next(ApiError.badRequest('Учетные данные не найдены'))
                }
                credentials.password = hashPassword
                await credentials.save()
            }

            return res.json({ message: 'Данные пользователя успешно обновлены' })
        } catch (error) {
            return next(ApiError.internal(error.message))
        }
    }
}

module.exports = new UserController()