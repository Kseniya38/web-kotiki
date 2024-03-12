const Router = require('express')
const router = new Router()
const referenceBooksController = require('../controllers/referenceBooksController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', referenceBooksController.getAll)
router.post('/add', checkRole('admin'), referenceBooksController.create)
router.put('/edit', checkRole('admin'), referenceBooksController.update)

module.exports = router