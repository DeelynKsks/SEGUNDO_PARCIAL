const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('dev'))
app.use(cors())

const port = process.env.PORT

app.use(require('./src/Routes/test.routes'))

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log(`MariaDB Test Connection: http://localhost:${port}/check-mariadb-connection`)
    console.log(`MongoDB Test Connection: http://localhost:${port}/check-mongodb-connection`)
})