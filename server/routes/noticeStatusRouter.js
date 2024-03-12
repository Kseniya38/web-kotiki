const Router = require('express')
const router = new Router()
const noticeStatusController =require('../controllers/noticeStatusController')

router.get('/', noticeStatusController.getAll)


module.exports = router