const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
const {Animal, Notice} = require('../models/models')

class AnimalController {
    async create(req, res) {
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

        let photos = []

        if (req.files) {
            const {photo} = req.files
            for (let photoElement of photo) {
                let fileName = uuid.v4() + ".jpg"
                photoElement.mv(path.resolve(__dirname, '..', 'static', fileName))
                photos.push(fileName)
            }
        }
        console.log(photos)
        const animal = await Animal.create({nickname,
            sterilizationId,
            healthId,
            genderId,
            ageId,
            colorId,
            animalStatusId,
            animalTypeId,
            breedId,
            photo: photos})
        return res.json(animal)
    }

    async update(req, res){
        const {
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

        for (let photoElement of photo) {
            fs.unlink(path.resolve(__dirname, '..', 'static', photoElement), (err) => {})
        }

        let photos = []

        if (req.files) {
            const {newPhoto} = req.files
            for (let photoElement of newPhoto) {
                let fileName = uuid.v4() + ".jpg"
                photoElement.mv(path.resolve(__dirname, '..', 'static', fileName))
                photos.push(fileName)
            }
        }
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
                photo: photos},
            {where: {id}})
        return res.json({ message:'Данные обновлены успешно'})
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
            limit,
            page
        } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        let filter = {}

        if (nickname){filter.nickname = nickname}

        if (sterilizationId){filter.sterilizationId = sterilizationId}

        if (healthId){filter.healthId = healthId}

        if (genderId){filter.genderId = genderId}

        if (ageId){filter.ageId = ageId}

        if (colorId){filter.colorId = colorId}

        if (animalStatusId){filter.animalStatusId = animalStatusId}

        if (animalTypeId){filter.animalTypeId = animalTypeId}

        if (breedId){filter.breedId = breedId}

        const animals= await Animal.findAndCountAll({limit, offset, where: filter,
        attributes: ['photo', 'colorId'],
        include: {
            model: Notice,
            attributes: ['event_date', 'city', 'district', 'street', 'house']
        }})
        return res.json(animals)
    }

}
module.exports = new AnimalController()

