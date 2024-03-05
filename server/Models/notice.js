const sequelize = require('../db')
const {DataTypes} = require('sequelize')

// модель объявления и ее справочник

const Notice = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    event_date: {type: DataTypes.DATE, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    district: {type: DataTypes.STRING, unique: true, allowNull: false},
    street: {type: DataTypes.STRING, unique: true, allowNull: true},
    house: {type: DataTypes.STRING, unique: true, allowNull: true},
    comment: {type: DataTypes.STRING, unique: true, allowNull: true},
})

const Status = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status_name: {type: DataTypes.STRING, allowNull: false},
})


// ниже идут справочники к животному

const AnimalType = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animal_type_name: {type: DataTypes.STRING, allowNull: false},
})

const BreedAnimal = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Breed = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animal_breed_name: {type: DataTypes.STRING, allowNull: false},
})

const AnimalStatus = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animal_status_name: {type: DataTypes.STRING, allowNull: false},
})

const Color = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    color_name: {type: DataTypes.STRING, allowNull: false},
})