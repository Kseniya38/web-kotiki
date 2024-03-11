const Router = require('express')
const router = new Router()
const referenceBooksController = require('../controllers/referenceBooksController')

router.get('/', referenceBooksController.getAll)
router.post('/add', referenceBooksController.create)
router.put('/edit', referenceBooksController.update)

module.exports = router