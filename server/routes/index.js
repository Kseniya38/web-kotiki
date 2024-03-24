const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const referenceBooksRouter = require('./referenceBooksRouter')
const animalRouter = require('./animalRouter')
const noticeRouter = require('./noticeRouter')
const roleRouter = require('./roleRouter')

router.use('/user', userRouter)
router.use('/notice', noticeRouter)
router.use('/animal', animalRouter)
router.use('/referenceBooks', referenceBooksRouter)
router.use('/role', roleRouter)

module.exports = router