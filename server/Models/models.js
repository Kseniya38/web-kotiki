const sequelize = require('../db')
const {DataTypes, STRING} = require('sequelize')

// модель пользователя и его полномочий

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: true},
    surname: {type: DataTypes.STRING, allowNull: true},
    telephone: {type: DataTypes.STRING, unique: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: true},
    social_media: {type: DataTypes.STRING, unique: true, allowNull: true},
})

const Credential = sequelize.define('credential', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    password: {type: DataTypes.STRING, allowNull: false}
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role_name: {type: DataTypes.STRING, allowNull: false}
})

// модель объявления и ее справочник

const Notice = sequelize.define('notice', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    event_date: {type: DataTypes.DATE, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    district: {type: DataTypes.STRING, unique: true, allowNull: false},
    street: {type: DataTypes.STRING, unique: true, allowNull: true},
    house: {type: DataTypes.STRING, unique: true, allowNull: true},
    comment: {type: DataTypes.STRING, unique: true, allowNull: true},
})

const NoticeStatus = sequelize.define('notice_status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status_name: {type: DataTypes.STRING, allowNull: false},
})

// модель животного и его справочники

const Animal = sequelize.define('animal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nickname: {type: DataTypes.STRING, allowNull: true},
    photo: {type: DataTypes.ARRAY(STRING), allowNull: true},
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

const AnimalType = sequelize.define('animal_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animal_type_name: {type: DataTypes.STRING, allowNull: false},
})

const Breed = sequelize.define('breed', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animal_breed_name: {type: DataTypes.STRING, allowNull: false},
})

const AnimalStatus = sequelize.define('animal_status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animal_status_name: {type: DataTypes.STRING, allowNull: false},
})

const Color = sequelize.define('color', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    color_name: {type: DataTypes.STRING, allowNull: false},
})

// связи пользователя, его полномочий и роли

User.hasMany(Notice)
Notice.belongsTo(User)

User.hasOne(Credential)
Credential.belongsTo(User)

Role.hasMany(User)
User.belongsTo(Role)

// связи объявления, его статуса

NoticeStatus.hasMany(Notice)
Notice.belongsTo(NoticeStatus)

// связи животного, его справочников

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

AnimalType.hasMany(Animal)
Animal.belongsTo(AnimalType)

AnimalType.hasMany(Breed)
Breed.belongsTo(AnimalType)

Breed.hasMany(Animal)
Animal.belongsTo(Breed)

module.exports = {
    User,
    Credential,
    Role,
    Notice,
    NoticeStatus,
    Animal,
    AnimalType,
    Breed,
    Sterilization,
    Health,
    Gender,
    Age,
    Color,
    AnimalStatus
}

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