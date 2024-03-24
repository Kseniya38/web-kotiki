const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
const {Animal, Notice} = require('../models/models')
const ApiError = require('../error/ApiError')
const {JSONB, DATE} = require("sequelize");

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
            include: {model: Notice}}
        )
        return res.json(animal)
    }

    async getAll(req, res){
        let {
            nickname,
            sterilizationId,
            healthId,
            genderId,
            ageId,
            colorId,
            animalStatusId,
            animalTypeId,
            breedId,
            address,
            event_date,
            userId,
            noticeStatusId
        } = req.query
        let {page, limit} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        let filterAnimal = {}
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
        if (event_date){filterNotice.event_date = event_date}

        if (nickname){filterAnimal.nickname = nickname}

        if (sterilizationId){filterAnimal.sterilizationId = sterilizationId}

        if (healthId){filterAnimal.healthId = healthId}

        if (genderId){filterAnimal.genderId = genderId}

        if (ageId){filterAnimal.ageId = ageId}

        if (colorId){filterAnimal.colorId = colorId}

        if (animalStatusId){filterAnimal.animalStatusId = animalStatusId}

        if (animalTypeId){filterAnimal.animalTypeId = animalTypeId}

        if (breedId){filterAnimal.breedId = breedId}

        console.log(filterAnimal)
        console.log(filterNotice)

        if (userId){
            animals = await Animal.findAll({
                where: {animalStatusId},
                attributes: ['photo', 'colorId', 'animalStatusId', 'animalTypeId'],
                include: {
                    model: Notice,
                    where: {userId, noticeStatusId},
                    attributes: ['event_date', 'address']
                }}
            )
        }
        else {
            if (Object.keys(filterAnimal).length === 0){
                animals = await Animal.findAndCountAll({
                    limit, offset,
                    attributes: ['photo', 'colorId', 'animalStatusId', 'animalTypeId'],
                    include: {
                        model: Notice,
                        where: filterNotice,
                        attributes: ['event_date', 'address']
                    }}
                )
            }
            else if (Object.keys(filterAnimal).length !== 0){
                animals = await Animal.findAndCountAll({
                    where: filterAnimal,
                    limit, offset,
                    attributes: ['photo', 'colorId', 'animalStatusId', 'animalTypeId'],
                    include: {
                        model: Notice,
                        where: filterNotice,
                        attributes: ['event_date', 'address']
                    }}
                )
            }
        }
        return res.json(animals)
    }
}
module.exports = new AnimalController()

