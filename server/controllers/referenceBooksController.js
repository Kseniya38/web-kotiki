const {
    AnimalType,
    Breed,
    AnimalStatus,
    Color,
    Age,
    Gender,
    Health,
    Sterilization
} = require('../models/models')

class ReferenceBooksController {
    async getAll(req, res){
        let referenceBooks = {
            "Типы животных": [],
            "Породы": [],
            "Статусы животных": [],
            "Цвета": [],
            "Возраст": [],
            "Пол": [],
            "Здоровье": [],
            "Стерилизация": []
        }

        const animal_types = await AnimalType.findAll()
        const breeds = await Breed.findAll()
        const animal_statuses = await AnimalStatus.findAll()
        const colors = await Color.findAll()
        const ages = await Age.findAll()
        const genders = await Gender.findAll()
        const health = await Health.findAll()
        const sterilizations = await Sterilization.findAll()

        for (let i = 0; i < animal_types.length; i++){
            referenceBooks["Типы животных"].push(animal_types[i].animal_type_name)
        }
        for (let i = 0; i < breeds.length; i++){
            referenceBooks["Породы"].push(breeds[i].animal_breed_name)
        }
        for (let i = 0; i < animal_statuses.length; i++){
            referenceBooks["Статусы животных"].push(animal_statuses[i].animal_status_name)
        }
        for (let i = 0; i < colors.length; i++){
            referenceBooks["Цвета"].push(colors[i].color_name)
        }
        for (let i = 0; i < ages.length; i++){
            referenceBooks["Возраст"].push(ages[i].age)
        }
        for (let i = 0; i < genders.length; i++){
            referenceBooks["Пол"].push(genders[i].gender)
        }
        for (let i = 0; i < health.length; i++){
            referenceBooks["Здоровье"].push(health[i].health)
        }
        for (let i = 0; i < sterilizations.length; i++){
            referenceBooks["Стерилизация"].push(sterilizations[i].sterilization)
        }

        return res.json(referenceBooks)
    }

    async create(req, res){
        const {
            sterilization,
            health,
            gender,
            age,
            animal_type_name,
            animal_breed_name,
            animalTypeId,
            animal_status_name,
            color_name
        } = req.body

        if (animal_type_name){
            const type = await AnimalType.create({animal_type_name})
            return res.json(type)
        }

        if (animal_breed_name && animalTypeId){
            const breed = await Breed.create({animal_breed_name, animalTypeId})
            return res.json(breed)
        }
        else if (animal_breed_name) {
            const breed = await Breed.create({animal_breed_name})
            return res.json(breed)
        }

        if (animal_status_name){
            const status = await AnimalStatus.create({animal_status_name})
            return res.json(status)
        }

        if (color_name){
            const color = await Color.create({color_name})
            return res.json(color)
        }

        if (age){
            const age_name = await Age.create({age})
            return res.json(age_name)
        }

        if (gender){
            const gender_name = await Gender.create({gender})
            return res.json(gender_name)
        }

        if (health){
            const health_name = await Health.create({health})
            return res.json(health_name)
        }

        if (sterilization){
            const sterilization_name = await Sterilization.create({sterilization})
            return res.json(sterilization_name)
        }
    }

    async update(req, res){
        const {
            id,
            sterilization,
            health,
            gender,
            age,
            animal_type_name,
            animalTypeId,
            animal_breed_name,
            animal_status_name,
            color_name
        } = req.body

        if (animal_type_name && id){
            const type = await AnimalType.update(
                {animal_type_name},
                {where:{id}}
            )
            return res.json(type)
        }

        if (animal_breed_name && id && animalTypeId){
            const breed = await Breed.update(
                {animal_breed_name},
                {animalTypeId},
                {where:{id}}
            )
            return res.json(breed)
        }
        else if (animal_breed_name && id){
            const breed = await Breed.update(
                {animal_breed_name},
                {where:{id}}
            )
            return res.json(breed)
        }
        else if (id && animalTypeId){
            const breed = await Breed.update(
                {animalTypeId},
                {where:{id}}
            )
            return res.json(breed)
        }

        if (animal_status_name && id){
            const status = await AnimalStatus.update(
                {animal_status_name},
                {where:{id}}
            )
            return res.json(status)
        }

        if (color_name && id){
            const color = await Color.update(
                {color_name},
                {where:{id}}
            )
            return res.json(color)
        }

        if (age && id){
            const age_name = await Age.update(
                {age},
                {where:{id}}
            )
            return res.json(age_name)
        }

        if (gender && id){
            const gender_name = await Gender.update(
                {gender},
                {where:{id}}
            )
            return res.json(gender_name)
        }

        if (health && id){
            const health_name = await Health.update(
                {health},
                {where:{id}}
            )
            return res.json(health_name)
        }

        if (sterilization && id){
            const sterilization_name = await Sterilization.update(
                {sterilization},
                {where:{id}}
            )
            return res.json(sterilization_name)
        }
    }
}
module.exports = new ReferenceBooksController()