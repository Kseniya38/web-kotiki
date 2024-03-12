const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const noticeRouter = require('./noticeRouter')
const noticeStatusRouter = require('./noticeStatusRouter')
const referenceBooksRouter = require('../routes/referenceBooksRouter')
//const animalRouter = require('./animalRouter')
//const noticeRouter = require('./noticeRouter')

router.use('/user', userRouter)
router.use('/notice',noticeRouter)
router.use('/noticeStatus',noticeStatusRouter)
//router.use('/notice', noticeRouter)
//router.use('/animal', animalRouter)
router.use('/referenceBooks', referenceBooksRouter)

module.exports = router