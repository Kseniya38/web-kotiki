const Router = require('express')
const router = new Router()

const noticeRouter = require('./noticeRouter')
const noticeStatusRouter = require('./noticeStatusRouter')


router.use('/notice',noticeRouter)
router.use('/noticeStatus',noticeStatusRouter)

module.exports = router