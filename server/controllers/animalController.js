const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
const {Animal, Notice, Color, AnimalStatus, AnimalType, User} = require('../models/models')
const ApiError = require('../error/ApiError')
const {JSONB, DATE, Op} = require("sequelize");

class AnimalController {
    async create(req, res, next) {
        try {
            const {
                nickname,
                sterilizationId,
                healthId,
                genderId,
                ageId,
                colorId,
                animalStatusId,
                animalTypeId,
                breedId
            } = req.body

            let photo = {}
            let order = 1
            let fileName

            if (req.files) {
                if (Object.keys(req.files.uploud).length === 9){
                    const picture = req.files.uploud
                    fileName = uuid.v4() + ".jpg"
                    picture.mv(path.resolve(__dirname, '..', 'static', fileName))
                    photo.first = fileName
                }
                else {
                    for (const picture of req.files.uploud) {
                        fileName = uuid.v4() + ".jpg"
                        picture.mv(path.resolve(__dirname, '..', 'static', fileName))
                        if (order === 1){photo.first = fileName}
                        if (order === 2){photo.second = fileName}
                        if (order === 3){photo.third = fileName}
                        if (order === 4){photo.fourth = fileName}
                        order = order + 1
                    }
                }
            }
            else if (animalTypeId === 3) {photo.first = "cat.jpg"}
            else photo.first = "dog.jpg"

            const animal = await Animal.create({nickname,
                sterilizationId,
                healthId,
                genderId,
                ageId,
                colorId,
                animalStatusId,
                animalTypeId,
                breedId,
                photo}
            )
            return res.json(animal)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next){
        try {
            let {
                id,
                nickname,
                sterilizationId,
                healthId,
                genderId,
                ageId,
                colorId,
                animalStatusId,
                animalTypeId,
                breedId,
                photo
            } = req.body
            photo = JSON.parse(photo)
            if (photo.first !== "cat.jpg" && photo.first !== "dog.jpg") {
                for (const photoElement in photo) {
                    let fileName = photo[photoElement]
                    fs.unlink(path.resolve(__dirname, '..', 'static', fileName), (err) => {})
                }
            }

            let newPhoto = {}
            let order = 1
            let fileName

            if (req.files) {
                if (Object.keys(req.files.uploud).length === 9){
                    const picture = req.files.uploud
                    fileName = uuid.v4() + ".jpg"
                    picture.mv(path.resolve(__dirname, '..', 'static', fileName))
                    newPhoto.first = fileName
                }
                else {
                    for (const picture of req.files.uploud) {
                        console.log(order,picture)
                        fileName = uuid.v4() + ".jpg"
                        picture.mv(path.resolve(__dirname, '..', 'static', fileName))
                        if (order === 1){newPhoto.first = fileName}
                        if (order === 2){newPhoto.second = fileName}
                        if (order === 3){newPhoto.third = fileName}
                        if (order === 4){newPhoto.fourth = fileName}
                        order = order + 1
                    }
                }
            }
            if (animalTypeId === "3") {newPhoto.first = "cat.jpg"}
            if (animalTypeId === "5"){newPhoto.first = "dog.jpg"}

            await Animal.update({
                    nickname,
                    sterilizationId,
                    healthId,
                    genderId,
                    ageId,
                    colorId,
                    animalStatusId,
                    animalTypeId,
                    breedId,
                    photo: newPhoto},
                {where: {id}})
            return res.json({ message:'Данные обновлены успешно'})
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res){
        const {id} = req.params
        const animal = await Animal.findOne({
            where:{id},
                include: [
                    {
                        model: Notice,
                        include: {
                            model: User
                        }
                    }
                ]
        }
        )
        return res.json(animal)
    }

    async getAll(req, res){
        let {
            sterilizationId,
            healthId,
            genderId,
            ageId,
            colorId,
            animalStatusId,
            animalTypeId,
            breedId,
            address,
            userId,
            noticeStatusId,
            date_lowerRange,
            date_upperRange
        } = req.query
        let {page, limit} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        let filterAnimal = []
        let filterNotice = {noticeStatusId: 1}
        let adr = {}
        let animals

        if (address){
            address = JSON.parse(address)
            if (address.hasOwnProperty('city')){adr.city = address.city}
            if (address.hasOwnProperty('district')){adr.district = address.district}
            if (address.hasOwnProperty('street')){adr.street = address.street}
            if (address.hasOwnProperty('house')){adr.house = address.house}
            filterNotice.address = adr
        }

        if (date_lowerRange && date_upperRange){
            const lowerRange = new Date(date_lowerRange)
            const upperRange = new Date(date_upperRange)
            filterNotice.event_date = {[Op.between]: [lowerRange, upperRange]}
        } else if (date_lowerRange && date_upperRange === undefined){
            const lowerRange = new Date(date_lowerRange)
            filterNotice.event_date = {[Op.gte]: lowerRange}
        } else if (date_lowerRange === undefined && date_upperRange){
            const upperRange = new Date(date_upperRange)
            filterNotice.event_date = {[Op.lte]: upperRange}
        }

        if (sterilizationId){
            try {
                sterilizationId = JSON.parse(sterilizationId)
                if (Array.isArray(sterilizationId)) {
                    let sterilizationArray = sterilizationId.map(id => ({sterilizationId: id}))
                    filterAnimal.push({[Op.or]: sterilizationArray})
                } else {
                    filterAnimal.push({sterilizationId: sterilizationId})
                }
            } catch (error) {
                console.error('Ошибка при обработке sterilizationId:', error)
                filterAnimal.push({ sterilizationId: sterilizationId })
            }
        }

        if (healthId){
            try {
                healthId = JSON.parse(healthId)
                if (Array.isArray(healthId)) {
                    let healthArray = healthId.map(id => ({healthId: id}))
                    filterAnimal.push({[Op.or]: healthArray})
                } else {
                    filterAnimal.push({healthId: healthId})
                }
            } catch (error) {
                console.error('Ошибка при обработке healthId:', error)
                filterAnimal.push({ healthId: healthId })
            }
        }

        if (genderId){
            try {
                genderId = JSON.parse(genderId)
                if (Array.isArray(genderId)) {
                    let genderArray = genderId.map(id => ({genderId: id}))
                    filterAnimal.push({[Op.or]: genderArray})
                } else {
                    filterAnimal.push({genderId: genderId})
                }
            } catch (error) {
                console.error('Ошибка при обработке genderId:', error)
                filterAnimal.push({ genderId: genderId })
            }
        }

        if (ageId){
            try {
                ageId = JSON.parse(ageId)
                if (Array.isArray(ageId)) {
                    let ageArray = ageId.map(id => ({ageId: id}))
                    filterAnimal.push({[Op.or]: ageArray})
                } else {
                    filterAnimal.push({ageId: ageId})
                }
            } catch (error) {
                console.error('Ошибка при обработке ageId:', error)
                filterAnimal.push({ ageId: ageId })
            }
        }

        if (colorId){
            try {
                colorId = JSON.parse(colorId)
                if (Array.isArray(colorId)) {
                   let colorArray = colorId.map(id => ({colorId: id}))
                    filterAnimal.push({[Op.or]: colorArray})
                }    else {
                    filterAnimal.push({colorId: colorId})
                }
            } catch (error) {
                console.error('Ошибка при обработке colorId:', error)
                filterAnimal.push({ colorId: colorId })
            }
        }

        if (animalStatusId) {
            try {
                animalStatusId = JSON.parse(animalStatusId)
                if (Array.isArray(animalStatusId)) {
                    let animalStatusArray = animalStatusId.map(id => ({ animalStatusId: id }))
                    filterAnimal.push({ [Op.or]: animalStatusArray })
                } else {
                    filterAnimal.push({ animalStatusId: animalStatusId })
                }
            } catch (error) {
                console.error('Ошибка при обработке animalStatusId:', error)
                filterAnimal.push({ animalStatusId: animalStatusId })
            }
        }

        if (animalTypeId){
            try {
                animalTypeId = JSON.parse(animalTypeId)
                if (Array.isArray(animalTypeId)) {
                    let animalTypeArray = animalTypeId.map(id => ({animalTypeId: id}))
                    filterAnimal.push({[Op.or]: animalTypeArray})
                }    else {
                    filterAnimal.push({animalTypeId: animalTypeId})
                }
            } catch (error) {
                console.error('Ошибка при обработке animalTypeId:', error)
                filterAnimal.push({ animalTypeId: animalTypeId })
            }
        }

        if (breedId){
            try {
                breedId = JSON.parse(breedId)
                if (Array.isArray(breedId)) {
                    let breedArray = breedId.map(id => ({ breedId: id }))
                    filterAnimal.push({ [Op.or]: breedArray })
                } else {
                    filterAnimal.push({ breedId: breedId })
                }
            } catch (error) {
                console.error('Ошибка при обработке breedId:', error)
                filterAnimal.push({ breedId: breedId })
            }
        }

        console.log(colorId)
        console.log(filterAnimal)
        console.log(filterNotice)

        if (userId){
            animals = await Animal.findAll({
                where: {[Op.and]: filterAnimal},
                attributes: ['photo', 'colorId', 'animalStatusId', 'animalTypeId'],
                include: [
                    {
                        model: Notice,
                        where: {userId, noticeStatusId},
                        attributes: ['event_date', 'address']
                    },
                    {
                        model: Color,
                        attributes: ['color_name']
                    },
                    {
                        model: AnimalStatus,
                        attributes: ['animal_status_name']
                    },
                    {
                        model: AnimalType,
                        attributes: ['animal_type_name']
                    }
                ]}
            )
        }
        else {
            if (filterAnimal.length === 0){
                animals = await Animal.findAndCountAll({
                    limit, offset,
                    attributes: ['id', 'photo', 'colorId', 'animalStatusId', 'animalTypeId'],
                    include: [
                        {
                            model: Notice,
                            where: filterNotice,
                            attributes: ['event_date', 'address']
                        },
                        {
                            model: Color,
                            attributes: ['color_name']
                        },
                        {
                            model: AnimalStatus,
                            attributes: ['animal_status_name']
                        },
                        {
                            model: AnimalType,
                            attributes: ['animal_type_name']
                        }
                    ]}
                )
            }
            else if (filterAnimal.length !== 0){
                animals = await Animal.findAndCountAll({
                    where: {[Op.and]: filterAnimal},
                    limit, offset,
                    attributes: ['id', 'photo', 'colorId', 'animalStatusId', 'animalTypeId'],
                    include: [
                        {
                            model: Notice,
                            where: filterNotice,
                            attributes: ['event_date', 'address']
                        },
                        {
                            model: Color,
                            attributes: ['color_name']
                        },
                        {
                            model: AnimalStatus,
                            attributes: ['animal_status_name']
                        },
                        {
                            model: AnimalType,
                            attributes: ['animal_type_name']
                        }
                    ]}
                )
            }
        }
        return res.json(animals)
    }
}
module.exports = new AnimalController()

