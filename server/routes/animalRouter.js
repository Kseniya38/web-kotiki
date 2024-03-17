const Router = require('express')
const router = new Router()
const animalController = require('../controllers/animalController')

router.get('/', animalController.getAll)
router.get('/:id', animalController.getOne)
router.post('/add', animalController.create)
router.post('/edit', animalController.update)

module.exports = router