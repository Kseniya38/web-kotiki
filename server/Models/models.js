const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: true},
    surname: {type: DataTypes.STRING, allowNull: true},
    telephone: {type: DataTypes.STRING, unique: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: true},
    social_media: {type: DataTypes.STRING, unique: true, allowNull: true},
})

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

const NoticeStatus = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status_name: {type: DataTypes.STRING, allowNull: false},
})

// модель животного и его справочники

const Animal = sequelize.define('animals', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nickname: {type: DataTypes.STRING, allowNull: true},
    photo: {type: DataTypes.ARRAY, allowNull: true}
})

const Sterilization = sequelize.define('sterilization', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    sterilization: {type: DataTypes.STRING, allowNull: false},
})

const Health = sequelize.define('health', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    health: {type: DataTypes.STRING, allowNull: false},
})

const Gender = sequelize.define('gender', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    gender: {type: DataTypes.STRING, allowNull:false},
})

const Age = sequelize.define('age', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    age: {type: DataTypes.STRING, allowNull: false},
})

const AnimalType = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animal_type_name: {type: DataTypes.STRING, allowNull: false},
})

const AnimalTypeBreed = sequelize.define('user', {
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
    color_name: {type: DataTypes.ARRAY, allowNull: false},
})

NoticeStatus.hasMany(Notice)
Notice.belongsTo(NoticeStatus)

Animal.hasMany(Notice)
Notice.belongsTo(Animal)

Sterilization.hasMany(Animal)
Animal.belongsTo(Sterilization)

Health.hasMany(Animal)
Animal.belongsTo(Health)

Gender.hasMany(Animal)
Animal.belongsTo(Gender)

Age.hasMany(Animal)
Animal.belongsTo(Age)

Color.hasMany(Animal)
Animal.belongsTo(Color)

AnimalStatus.hasMany(Animal)
Animal.belongsTo(AnimalStatus)

AnimalTypeBreed.hasMany(Animal)
Animal.belongsTo(AnimalTypeBreed)

AnimalType.hasMany(Animal)
Animal.belongsTo(AnimalType)

AnimalTypeBreed.hasMany(Breed)
Breed.belongsTo(AnimalTypeBreed)

AnimalType.hasMany(AnimalTypeBreed)
AnimalTypeBreed.belongsTo(AnimalType)

// шаблоны для связей

// one-to-many
//Class1.hasMany(Class2)
//Class2.belongsTo(Class1)

// one-to-one
//Class1.hasOne(Class2)
//Class2.belongsTo(Class1)

// many-to-many
//Class1.belongsToMany(Class2, {through: Class1Class2 })
//Class2.belongsToMany(Class1, {through: Class1Class2 })