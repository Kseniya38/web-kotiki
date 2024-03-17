const {NoticeStatus} = require('../models/models')
class NoticeStatusController{
    async create(req, res){
        const {status_name} = req.body
        const status = await NoticeStatus.create({status_name})
        return res.json(status)
    }

}
module.exports = new NoticeStatusController()