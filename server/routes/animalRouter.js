const Router = require('express')
const router = new Router()
const animalController = require('../controllers/animalController')
const authMiddleware = require("../middleware/authMiddleware");

router.get('/', animalController.getAll)
router.get('/:id', animalController.getOne)
router.post('/add', authMiddleware, animalController.create)
router.post('/edit', authMiddleware, animalController.update)

module.exports = router