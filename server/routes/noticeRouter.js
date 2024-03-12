const Router = require('express')
const router = new Router()
const noticeController =require('../controllers/noticeController')

router.post('/', noticeController.create)
router.get('/',noticeController.getAll)
router.get('/:id',noticeController.getOne)


module.exports = router