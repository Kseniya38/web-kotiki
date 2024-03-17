const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/:id', authMiddleware, userController.getOne)
router.get('/logout/:id', authMiddleware, userController.logout)
router.put('/update/:id', checkRole('author'), userController.update)


module.exports = router