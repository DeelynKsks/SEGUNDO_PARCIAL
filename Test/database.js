const mariadb = require('mariadb')

const db = mariadb.createPool({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: 'root',
    password: process.env.DBPASSWORD,
    
})

module.exports = db