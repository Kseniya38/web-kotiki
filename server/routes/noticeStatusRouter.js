const Router = require('express')
const router = new Router()
const noticeStatusController =require('../controllers/noticeStatusController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.get('/add', checkRole('admin'), noticeStatusController.create)


module.exports = router