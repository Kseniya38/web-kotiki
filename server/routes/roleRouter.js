const Router = require('express')
const router = new Router()
const roleController = require('../controllers/roleController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('admin'), roleController.create)
router.get('/', roleController.getAll)

module.exports = router