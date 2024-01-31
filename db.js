const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root', // replace with your MySQL username
    password: 'Qqwerty1!', // replace with your MySQL password
    database: 'library', // replace with your database name
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
