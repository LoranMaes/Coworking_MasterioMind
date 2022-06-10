'use strict';

(function() {
    //button that navigates back to the homepage
    const backToHome = document.querySelector("#backToHome");

    //start/restart/submit-button
    const gameBtn = document.querySelector("#gameBtn");
    
    //creating consts for eventListeners for the players choice
    const inputColour = document.querySelectorAll(".inputColour");
    const inputColourArea = document.querySelector("#colours");
    const changeChoice = document.querySelectorAll(".guess div");
    
    //getting all the choices that te user can make or has made
    const previousChsDisp = document.querySelectorAll(".sections div");
    const currentChsDisp = document.querySelectorAll(".guess div");
    const feedback = document.querySelectorAll(".feedback div");
    const solution = document.querySelectorAll("#solution div");

    //getting all the elements for the game-end popup
    const popup = document.querySelector("#popup");
    const popupTitel = document.querySelector("#popup h2");
    const popupParagraph = document.querySelector("#popup p")
    const popupParagraph2 = document.querySelector("#popup p:last-of-type")
    
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

    backToHome.addEventListener("click", () => {
        window.location = "../../"
    })

    //creating a random colour code
    const genRandCode = () => {
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
            displayPopup(true); 
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
        let str = "";
        let codeCopy = JSON.parse(JSON.stringify(code)); 
        let currentChsCopy = JSON.parse(JSON.stringify(currentChs)); 
        for(let i = 0; i < maxNrOfInputs; i++) {
            //if(optie)j=i;
            if (code[i] === currentChs[i]) {
                feedback[j+previousChsIndex*maxNrOfInputs].className = "black";
                str += i;
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
            //if(optie)j=i;
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
        for (let i = 0; i < code.length; i++) {
            solution[i].className = "";
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
            let temp = document.createElement("div")
            temp.setAttribute("id","form")
            temp.innerHTML = `
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value=${localStorage.getItem("name") ? localStorage.getItem("name") : ""}>`
            popup.insertBefore(temp,popupParagraph2)
        } else {
            popupTitel.innerHTML = "You lost...";
            popupParagraph.innerHTML = `You ran out of guesses...`;
        }
        popupParagraph2.innerHTML = `[Press the 'Restart' button to start a new game]`;
        popup.style.display = "flex";
    }
    const scoreSet = [1,2,3,4,6,8,10]
    //getting name and checking for high score
    const highScoreUpdate = () => {
        const form = document.querySelector("#popup #form"); 
        const name = document.querySelector("#popup #name");
        const score = scoreSet[previousChsIndex + 1];
        if(name && name.value) {
            if(!localStorage.getItem("highscore")) {
                localStorage.setItem("highscore",score)
                localStorage.setItem("name", name.value)
                highScoreInsertReq(name.value,score)
            } else {
                if(score >= localStorage.getItem("highscore")) {
                    localStorage.setItem("highscore",score);
                    localStorage.setItem("name",name.value);
                    highScoreUpdateReq(name.value, score);
                }
            }
        }
        popup.removeChild(form);
    }

    const highScoreUpdateReq = async (name,score) => {
        try {
            const result = await fetch('https://backend.lukasdownes.ikdoeict.be/masteriomind',{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    score: score
                })
            })
            if(!result.ok) throw Error();
        } catch (err) {
            console.log(err)
        }
    }

    const highScoreInsertReq = async (name,score) => {
        try {
            const result = await fetch('https://backend.lukasdownes.ikdoeict.be/masteriomind',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    score: score
                })
            })
            if(!result.ok) throw Error();
        } catch (err) {
            console.log(err)
        }
    }

    //main function
    const main = () => {
        let countAttempts = 0
        let highScore = 0
        if(gameBtn.textContent === "Restart") highScoreUpdate();
        popup.style.display = 'none';
        if (!started) {
            reset();
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
})();
