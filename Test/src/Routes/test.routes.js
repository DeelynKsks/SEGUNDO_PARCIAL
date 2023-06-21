const express = require('express')
const router = express.Router()

const { testConnectionMariaDB, testConnectionMongoDB } = require('../Controllers/test.controllers')

router.get('/check-mariadb-connection', testConnectionMariaDB)
router.get('/check-mongodb-connection', testConnectionMongoDB)

module.exports = router