const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    database:'users',
    user:'root',
    password:'Anshs@2126'
});

module.exports = connection;