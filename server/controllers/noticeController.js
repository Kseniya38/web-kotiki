const {Notice} = require('../models/models')

class NoticeController{
    async create(req, res){
        const {
            animalId,
            noticeStatusId,
            userId,
            event_date,
            city,
            district,
            street,
            house,
            comment
        } = req.body
        const notice = await Notice.create(
            {
                animalId,
                noticeStatusId,
                userId,
                event_date,
                city,
                district,
                street,
                house,
                comment
            }
        )
        return res.json(notice)
    }
    async update(req, res){
        const {
            id,
            animalId,
            noticeStatusId,
            userId,
            event_date,
            city,
            district,
            street,
            house,
            comment
        } = req.body
        await Notice.update(
            {
                animalId,
                noticeStatusId,
                userId,
                event_date,
                city,
                district,
                street,
                house,
                comment
            },
            {where: {id}}
        )
        return res.json({ message:'Данные обновлены успешно'})
    }
}
module.exports = new NoticeController()