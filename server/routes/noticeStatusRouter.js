const Router = require('express')
const router = new Router()
const noticeStatusController =require('../controllers/noticeStatusController')

router.post('/add', noticeStatusController.create)


module.exports = router