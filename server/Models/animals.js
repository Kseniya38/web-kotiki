
const sequelize = require("../db");
const {DataTypes} = require("sequelize");
const Animals = sequelize.define('animals', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nickname: {type: DataTypes.STRING, allowNull: true},
    photo: {type: DataTypes.ARRAY}
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