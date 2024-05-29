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
        let referenceBooks = []
        let a = []
        let b = []
        let c = []
        let d = []
        let e = []
        let j = []
        let g = []
        let h = []


        const animal_types = await AnimalType.findAll()
        const breeds = await Breed.findAll()
        const animal_statuses = await AnimalStatus.findAll()
        const colors = await Color.findAll()
        const ages = await Age.findAll()
        const genders = await Gender.findAll()
        const health = await Health.findAll()
        const sterilizations = await Sterilization.findAll()

        for (let i = 0; i < animal_types.length; i++){
            a.push(animal_types[i].animal_type_name)
        }
        for (let i = 0; i < breeds.length; i++){
            b.push(breeds[i].animal_breed_name)
        }
        for (let i = 0; i < animal_statuses.length; i++){
            c.push(animal_statuses[i].animal_status_name)
        }
        for (let i = 0; i < colors.length; i++){
            d.push(colors[i].color_name)
        }
        for (let i = 0; i < ages.length; i++){
            e.push(ages[i].age)
        }
        for (let i = 0; i < genders.length; i++){
            j.push(genders[i].gender)
        }
        for (let i = 0; i < health.length; i++){
            g.push(health[i].health)
        }
        for (let i = 0; i < sterilizations.length; i++){
            h.push(sterilizations[i].sterilization)
        }

        const aa = {name_drop_down: "Тип животного",list_drop_down: a }
        const bb = {name_drop_down: "Порода",list_drop_down: b }
        const cc = {name_drop_down: "Статус животного",list_drop_down: c }
        const dd = {name_drop_down: "Окрас",list_drop_down: d }
        const ee = {name_drop_down: "Возраст",list_drop_down: e }
        const jj = {name_drop_down: "Пол",list_drop_down: j }
        const gg = {name_drop_down: "Состояние здоровья",list_drop_down: g }
        const hh = {name_drop_down: "Стерилизация",list_drop_down: h }

        referenceBooks.push(aa, bb, cc, dd, ee, jj, gg, hh)

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