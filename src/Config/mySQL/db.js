const mysql = require('mysql');
const {config} = require('dotenv');
config();

const pool = mysql.createPool({
    host: process.env.localhost,
    user: process.env.root,
    password: process.env.password,
    database: process.env.first_schema,
    connectionLimit: 10
})

module.exports = pool;