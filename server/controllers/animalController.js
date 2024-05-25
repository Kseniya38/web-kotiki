const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
const {Animal, Notice} = require('../models/models')
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
            include: {model: Notice}}
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
            sterilizationId = JSON.parse(sterilizationId)
            let sterilizationArray = []
            for (let sterilizationIdElement of sterilizationId.numbers) {
                let sterilization = {sterilizationId: sterilizationIdElement}
                sterilizationArray.push(sterilization)
            }
            filterAnimal.push({[Op.or]: sterilizationArray})
        }

        if (healthId){
            healthId = JSON.parse(healthId)
            let healthArray = []
            for (let healthIdElement of healthId.numbers) {
                let health = {healthId: healthIdElement}
                healthArray.push(health)
            }
            filterAnimal.push({[Op.or]: healthArray})
        }

        if (genderId){
            genderId = JSON.parse(genderId)
            let genderArray = []
            for (let genderIdElement of genderId.numbers) {
                let gender = {genderId: genderIdElement}
                genderArray.push(gender)
            }
            filterAnimal.push({[Op.or]: genderArray})
        }

        if (ageId){
            ageId = JSON.parse(ageId)
            let ageArray = []
            for (let ageIdElement of ageId.numbers) {
                let age = {ageId: ageIdElement}
                ageArray.push(age)
            }
            filterAnimal.push({[Op.or]: ageArray})
        }

        if (colorId){
            colorId = JSON.parse(colorId)
            let colorArray = []
            for (let colorIdElement of colorId.numbers) {
                let color = {colorId: colorIdElement}
                colorArray.push(color)
            }
            filterAnimal.push({[Op.or]: colorArray})
        }

        if (animalStatusId) {
            try {
                animalStatusId = JSON.parse(animalStatusId);
                if (Array.isArray(animalStatusId)) {
                    let statusArray = animalStatusId.map(id => ({ animalStatusId: id }));
                    filterAnimal.push({ [Op.or]: statusArray });
                } else {
                    filterAnimal.push({ animalStatusId: animalStatusId });
                }
            } catch (error) {
                console.error('Ошибка при обработке animalStatusId:', error);
                filterAnimal.push({ animalStatusId: animalStatusId });
            }
        }

        if (animalTypeId){
            animalTypeId = JSON.parse(animalTypeId)
            let typeArray = []
            for (let animalTypeIdElement of animalTypeId.numbers) {
                let type = {animalTypeId: animalTypeIdElement}
                typeArray.push(type)
            }
            filterAnimal.push({[Op.or]: typeArray})
        }

        if (breedId){
            breedId = JSON.parse(breedId)
            let breedArray = []
            for (let breedIdElement of breedId.numbers) {
                let breed = {breedId: breedIdElement}
                breedArray.push(breed)
            }
            filterAnimal.push({[Op.or]: breedArray})
        }

        console.log(colorId)
        console.log(filterAnimal)
        console.log(filterNotice)

        if (userId){
            animals = await Animal.findAll({
                where: {[Op.and]: filterAnimal},
                attributes: ['photo', 'colorId', 'animalStatusId', 'animalTypeId'],
                include: {
                    model: Notice,
                    where: {userId, noticeStatusId},
                    attributes: ['event_date', 'address']
                }}
            )
        }
        else {
            if (filterAnimal.length === 0){
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
            else if (filterAnimal.length !== 0){
                animals = await Animal.findAndCountAll({
                    where: {[Op.and]: filterAnimal},
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

