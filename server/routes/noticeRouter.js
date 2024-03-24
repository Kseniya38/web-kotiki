const Router = require('express')
const router = new Router()
const noticeController =require('../controllers/noticeController')
const authMiddleware = require("../middleware/authMiddleware")
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/add', authMiddleware, noticeController.createNotice)
router.put('/edit', authMiddleware, noticeController.updateNotice)
router.get('/status/',noticeController.getAllNoticeStatus)
router.post('/status/add', checkRole('admin'), noticeController.createNoticeStatus)
router.put('/status/edit', checkRole('admin'), noticeController.updateNoticeStatus)

module.exports = router