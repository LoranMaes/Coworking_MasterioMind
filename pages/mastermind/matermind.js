'use strict';

(function() {
<<<<<<< HEAD
    //button that navigates back to the homepage
    const backToHome = document.querySelector("#backToHome");
=======

    //setting maximum highscores
    const countAttempts = -1;
    const highScore = 8;

    //getting oldest highscore of user
    let getPreviousHighscore = localStorage.getItem("highscore");




    //const backToHome = document.querySelector("#")
    const gameBtn = document.querySelector("#gameBtn");
>>>>>>> a36419146b76720e9f269ec41b1357f064440fde

    //start/restart/submit-button
    const gameBtn = document.querySelector("#gameBtn");
    
    //creating consts for eventListeners for the players choice
    const inputColour = document.querySelectorAll(".inputColour");
    const inputColourArea = document.querySelector("#colours");
    const changeChoice = document.querySelectorAll(".guess div");
    
    //getting all the choices that te user can make or has made
    const previousChsDisp = document.querySelectorAll(".sections div");
    const currentChsDisp = document.querySelectorAll(".guess div");
    const feedback = document.querySelectorAll(".feedback div")

    //getting all the elements for the game-end popup
    const popup = document.querySelector("#popup");
    const popupTitel = document.querySelector("#popup h2");
    const popupParagraph = document.querySelector("#popup p")
    const popupParagraph2 = document.querySelector("#popup p:nth-child(2)")
    
    //extra param
    const maxAttempts = 7;
    const maxNrOfInputs = 4;
    
    //boolean that determines game state
    let started = false;

    //setting basic parameters
    const previousChoices = Array.apply(null, Array(maxAttempts)).map(function () {});
    const colours = ["blue","green","yellow","red"];
    const code = [];
    const currentChs = Array.apply(null, Array(maxNrOfInputs)).map(function () {});;

    let currentChsIndex = 0;
    let previousChsIndex = maxAttempts-1;

<<<<<<< HEAD
    backToHome.addEventListener("click", () => {
        window.location = "../../"
    })

    //creating a random colour code
    const genRandCode = () => {
=======
    //resetting highscores
    const resetHighscore = function() {
        highScore = 7;
        countAttempts = 0;
    }


    //creating a random colour code
    const genRandCode = function() {

>>>>>>> a36419146b76720e9f269ec41b1357f064440fde
        for (let i = 0; i < maxNrOfInputs; i++) {
            code[i] = colours[Math.floor(Math.random()*colours.length)];
            console.log(code);
        }
    }
    //create custom colour code
    const genCustomCode = function() {
        makeChoice;
        for(let i =0 ; i<inputColour.length; i++) {
            code[i] = currentChs[i]
            started = true;
            gameBtn.innerText = "Submit Choice";
            gameBtn.removeEventListener('click',genCustomCode);
            gameBtn.addEventListener('click',mainIfTwoPlayers);
        }   resetChs();
        nrOfGuesses++
        console.log(nrOfGuesses)
    }
    //reaction to the colours the user chooses
    const makeChoice = (colour) => {
        try {
            if(currentChs === maxNrOfInputs) throw Error("Je mag maar 4 kleuren ingeven");
            else {
                currentChs[currentChsIndex] = colour;
                currentChsDisp[currentChsIndex].className = colour;
                currentChsIndex++;
            }
        } catch(err) {
            console.log(err);
        }
    }
    //submitting the choice
    const submitChoice = () => {
        previousChoices[previousChsIndex] = currentChs;
        addPreviousChsToDisp();
        feedbackFctn()
        if (chckChs()) {
            started = false;
            gameBtn.innerText = "Restart";
            showSolution();
<<<<<<< HEAD
            displayPopup(true); 
=======
            
            // Only store highest score of user
            if (highScore > getPreviousHighscore) {
                localStorage.setItem("highscore", highScore)
            } 
            
            window.alert("You won"); 

           
>>>>>>> a36419146b76720e9f269ec41b1357f064440fde
        }
        if(previousChsIndex === 0) {
                started = false;
                showSolution();
                displayPopup(false);
                gameBtn.innerText = "Restart";
        }
        resetChs();
        previousChsIndex--;
    };
    //changing playing board css so the previous choices reflect the actual prev choices
    const addPreviousChsToDisp = () => {
        for(let i = 0; i < maxNrOfInputs; i++) {
            const temp = previousChoices[previousChsIndex][i];
            previousChsDisp[previousChsIndex*maxNrOfInputs+i].className = temp;
        }
    }
    //resets the choice input
    const resetChs = () => {
        for(let i = 0; i < maxNrOfInputs; i++) {
            currentChsDisp[i].className = '';
            currentChs[i] = null;
        }
        currentChsIndex = 0;
    }
    //gives feedback to user
    const feedbackFctn = () => {
        let j = 0;
        let forb = "";
        for(let i = 0; i < maxNrOfInputs; i++) {
            if (code[i] === currentChs[i]) {
                feedback[j+previousChsIndex*maxNrOfInputs].className = "black";
                forb += i;
                j++;continue;
            } 
        }
        for (let i = str.length-1; i >= 0; i--) {
            codeCopy.splice(str.charAt(i),1);
            currentChsCopy.splice(str.charAt(i),1);
        }
        codeCopy.sort();
        currentChsCopy.sort();
        for(let i = 0; i< currentChsCopy.length; i++) {
            if (currentChsCopy[i] === codeCopy[i]) {
                feedback[j+previousChsIndex*maxNrOfInputs].className = "white";
                j++;continue;
            }
        }
    }
    //looks whether the input was a winner
    const chckChs = () => {
        for(let i = 0; i < maxNrOfInputs; i++) {
            if (code[i] !== currentChs[i]) return false;
        }
        return true;
    }
    //resets whole board
    const reset = () => {
        for(let i=0;i<maxNrOfInputs;i++){
            for(let j=0; j<maxAttempts; j++) {
                previousChsDisp[i+j*maxNrOfInputs].className = '';
                feedback[i+j*maxNrOfInputs].className = '';
            }  
        }
        for(let i =0 ; i<inputColour.length; i++) {
            inputColour[i].removeEventListener("click",()=>{
                makeChoice(colours[i]);
            });
        }

        previousChsIndex = maxAttempts -1;
    }
    //show solution
    const showSolution = () => {
        for (let i = 0; i < code.length; i++) {
            solution[i].className = code[i];
        }
    }
    //display popup that tells you "you have won/lost"
    const displayPopup = (gameWon) => {
        if (gameWon) {
            popupTitel.innerHTML = "You won!"
            popupParagraph.innerHTML = `You guessed the right code in ${maxAttempts-previousChsIndex} guesses`
        } else {
            popupTitel.innerHTML = "You lost...";
            popupParagraph.innerHTML = `You ran out of guesses...`;
        }
        popupParagraph2.innerHTML = `(Press the 'Restart' button to start a new game)`;
        popup.style.display = "flex";
    }


    //main function
    const main = () => {
        popup.style.display = 'none';
        if (!started) {
            reset();
            resetHighscore();
            genRandCode();
            started = true;
            gameBtn.innerText = "Submit Choice";

            // Counting highscores and number of attempts

        } else if (started && currentChsIndex === 4) {
            submitChoice();
            countAttempts += 1;
            highScore -= 1;
            console.log("Highscore " + highScore);
            console.log("Attempts " + countAttempts);

        }
        
    }
    //main function if there are two players
    const mainIfTwoPlayers = function(){
        popup.style.display = 'none';
        if (!started) {
            reset();
            submitChoice;
            gameBtn.innerText = "Enter Secret Code";
            gameBtn.removeEventListener('click',mainIfTwoPlayers);
            gameBtn.addEventListener('click',genCustomCode);
        } else if (started){
            submitChoice();
        }         
    }


    //determine amount of players and which main two choose
    let playerAmount = localStorage.getItem("two_players")
    let mainFunction = main;
    if (playerAmount === "true"){
        mainFunction = mainIfTwoPlayers
    } 
    
    //eventlisteners that make the game playable
    gameBtn.addEventListener('click',mainFunction);
    for(let i = 0; i < colours.length; i++) {
        inputColour[i].addEventListener('click', ()=>{
            makeChoice(colours[i])
        })
    }
    changeChoice.forEach((el) => el.addEventListener('click', (el)=>{
        if(el.target.className !== '' && currentChsIndex > 0) {
            el.target.className = '';
            currentChsIndex--;
        }
    }));
<<<<<<< HEAD
})();
=======


    //only counting scores when a non empty input is submitted
    gameBtn.addEventListener("click", function() {
            if (started && currentChsIndex === 4) {
                countAttempts += 1;
                highScore -= 1;
                console.log("Highscore " + highScore);
                console.log("Attempts " + countAttempts);
            } else {
                console.log("Nothing is submitted");
            }
    });

    
    

})();
>>>>>>> a36419146b76720e9f269ec41b1357f064440fde
