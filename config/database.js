const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b0d9c584d28992',
    password: '3e0eefa9',
    database: 'heroku_d00307e00dbc214',
    multipleStatements: true
});

// connect to database
connection.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = connection;