const {Notice, NoticeStatus} = require('../models/models')
const ApiError = require("../error/ApiError");
const {where} = require("sequelize");

class NoticeController{
    async createNotice(req, res, next){
        try {
            const {
                animalId,
                noticeStatusId,
                userId,
                event_date,
                address,
                comment
            } = req.body
            const notice = await Notice.create(
                {
                    animalId,
                    noticeStatusId,
                    userId,
                    event_date,
                    address,
                    comment
                }
            )
            return res.json(notice)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async updateNotice(req, res, next){
        try {
            let {
                id,
                animalId,
                noticeStatusId,
                userId,
                event_date,
                address,
                comment
            } = req.body
            address = JSON.parse(address)
            await Notice.update(
                {
                    animalId,
                    noticeStatusId,
                    userId,
                    event_date,
                    address,
                    comment
                },
                {where: {id}}
            )
            return res.json({ message:'Данные обновлены успешно'})
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async createNoticeStatus(req, res, next){
        try {
            const {status_name} = req.body
            const status = await NoticeStatus.create({status_name})
            return res.json(status)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async updateNoticeStatus(req, res, next){
        try {
            const {status_name, id} = req.body
            await NoticeStatus.update({status_name}, {where: {id}})
            return res.json({ message:'Данные обновлены успешно'})
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllNoticeStatus(req, res){
        const statuses = await NoticeStatus.findAll()
        return res.json(statuses)
    }
}
module.exports = new NoticeController()