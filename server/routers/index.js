const Router = require('express')
const router = new Router()
//const animalRouter = require('./animalRouter')
//const noticeRouter = require('./noticeRouter')
const referenceBooksRouter = require('./referenceBooksRouter')

//router.use('/notice', noticeRouter)
//router.use('/animal', animalRouter)
router.use('/referenceBooks', referenceBooksRouter)

module.exports = router