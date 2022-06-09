(function(){
    "use strict"

    const close = document.querySelector("#close-to-menu")

    close.addEventListener("click", () => {
        window.location = "../../"
    })
})()

// Highscore Name variables
let naam = localStorage.getItem("username");
let score = localStorage.getItem("highscore");

// Names
const firstplaceName = document.getElementById("firstplaceName");
const secondplaceName = document.getElementById("secondplaceName");
const thirdplaceName = document.getElementById("thirdplaceName");
const fourthplaceName = document.getElementById("fourthplaceName");
const fifthplaceName = document.getElementById("fifthplaceName");
const sixthplaceName = document.getElementById("sixthplaceName");
const seventhplaceName = document.getElementById("seventhplaceName");

// Scores
const firstplaceScore = document.getElementById("firstplaceScore");
const secondplaceScore = document.getElementById("secondplaceScore");
const thirdplaceScore = document.getElementById("thirdplaceScore");
const fourthplaceScore = document.getElementById("fourthplaceScore");
const fifthplaceScore = document.getElementById("fifthplaceScore");
const sixthplaceScore = document.getElementById("sixthplaceScore");

// Displaying scores and names

// Top 3
firstplaceName.innerHTML = naam;
firstplaceScore.innerHTML = `<img class="trophy" src="../../images/images/trophy.png" alt="icon trophy"> ` + score;

secondplaceName.innerHTML = naam;
secondplaceScore.innerHTML = `<img class="trophy" src="../../images/images/trophy.png" alt="icon trophy"> ` + score;

thirdplaceName.innerHTML = naam;
thirdplaceScore.innerHTML = `<img class="trophy" src="../../images/images/trophy.png" alt="icon trophy"> ` + score;

// Places 4 - 5 - 6 - 7

fourthplaceName.innerHTML = naam;
fifthplaceName.innerHTML = naam;
sixthplaceName.innerHTML = naam;
seventhplaceName.innerHTML = naam;