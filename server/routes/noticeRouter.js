const Router = require('express')
const router = new Router()
const noticeController =require('../controllers/noticeController')
const authMiddleware = require("../middleware/authMiddleware");

router.post('/add', authMiddleware, noticeController.create)
router.post('/edit', authMiddleware, noticeController.update)
//router.get('/',noticeController.getAll)
//router.get('/:id',noticeController.getOne)

module.exports = router