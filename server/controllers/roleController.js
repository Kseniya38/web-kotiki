const {Role, User, Sterilization} = require('../models/models')

class RoleController{
    async create(req, res){
        const {role_name} = req.body
        const role = await Role.create({role_name})
        return res.json({role})
    }

    async getAll(req, res){
        const roles = await Role.findAll()
        return res.json({roles})
    }
}

module.exports = new RoleController()