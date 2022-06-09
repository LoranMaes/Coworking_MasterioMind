'use strict';

let mysql = require('mysql');

const connection = mysql.createConnection ({
    host: "localhost",
    user: "highscores",
    database: "highscores",
    password: "Azerty123!"
});


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connection successfull");
    const sql = "INSERT INTO highscores VALUES (null, 'User 1', 5)";

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("inserted one row");
    })

    connection.end();

})
