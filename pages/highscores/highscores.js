(function(){
    "use strict"

    const close = document.querySelector("#close-to-menu")

    close.addEventListener("click", () => {
        window.location = "../../"
    })
})()

const req = require('express/lib/request')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'highscores',
    password: 'Azerty123!',
    database: 'highscores'
})

// Highscore Name variables
const firstplaceName = document.getElementById("firstplaceName");
const secondplaceName = document.getElementById("secondplaceName");
const thirdplaceName = document.getElementById("thirdplaceName");
const fourthplaceName = document.getElementById("fourthplaceName");
const fifthplaceName = document.getElementById("fifthplaceName");
const sixthplaceName = document.getElementById("sixthplaceName");
const seventhplaceName = document.getElementById("seventhplaceName");

// Highscore Names
firstplaceName.textContent = 'Player 1';
secondplaceName.textContent = 'Player 2';
thirdplaceName.textContent = 'Player 3';
fourthplaceName.textContent = 'Player 4';
fifthplaceName.textContent = 'Player 5';
sixthplaceName.textContent = 'Player 6';
seventhplaceName.textContent = 'Player 7';

// Highscore Score variables
const firstplaceScore = document.getElementById("firstplaceScore");
const secondplaceScore = document.getElementById("secondplaceScore");
const thirdplaceScore = document.getElementById("thirdplaceScore");

// Highscore Scores
firstplaceScore.innerHTML= `<img class="trophy" src="../../images/images/trophy.png" alt="icon trophy">
100`;

secondplaceScore.innerHTML = `<img class="trophy" src="../../images/images/trophy.png" alt="icon trophy">
50`;

thirdplaceScore.innerHTML = `<img class="trophy" src="../../images/images/trophy.png" alt="icon trophy">
10`;





// Highscores from database

connection.connect(function (err) {
    if (err) throw err;
    connection.query('SELECT * FROM highscores', function (err, result) {
        if (err) throw err;
        console.log(result)
    })



    let updateQuery = connection.query("INSERT INTO `highscores` (name, score) VALUES ('"+firstplaceName+"','"+ firstplaceScore+"')");

    connection.query(updateQuery, function (err, result) {
        if (err) throw err;
        console.log(result);
    })
})
    


// End database connection
connection.end()



