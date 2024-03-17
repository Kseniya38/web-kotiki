const Router = require('express')
const router = new Router()
const noticeController =require('../controllers/noticeController')

router.post('/add', noticeController.create)
router.put('/edit',noticeController.update)


module.exports = router