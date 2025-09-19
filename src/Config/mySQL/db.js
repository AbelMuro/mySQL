const mysql = require('mysql2');
const {config} = require('dotenv');
config();

const db = mysql.createPool({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
})

module.exports = db;