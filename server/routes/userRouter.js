const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/:id', authMiddleware, userController.getOne)
router.post('/logout/:id', authMiddleware, userController.logout)
router.put('/update/:id', authMiddleware, userController.update)


module.exports = router