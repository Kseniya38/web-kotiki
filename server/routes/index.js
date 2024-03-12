const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const noticeRouter = require('./noticeRouter')
const noticeStatusRouter = require('./noticeStatusRouter')

router.use('/user', userRouter)
router.use('/notice',noticeRouter)
router.use('/noticeStatus',noticeStatusRouter)

module.exports = router