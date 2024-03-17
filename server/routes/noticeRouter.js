const Router = require('express')
const router = new Router()
const noticeController =require('../controllers/noticeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/add', checkRole('author'), noticeController.create)
router.post('/edit', checkRole('author'), noticeController.update)
//router.get('/',noticeController.getAll)
//router.get('/:id',noticeController.getOne)

module.exports = router