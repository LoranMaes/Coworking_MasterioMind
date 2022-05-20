(function(){
    "use strict"
    const starten = document.querySelector("#starten_btn")
    const spelregels = document.querySelector("#spelregels_btn")
    const opties = document.querySelector("#opties_btn")
    const taal = document.querySelector("#taal_btn")
    const musicState = localStorage.getItem("music_state") 

    spelregels.addEventListener("click", () => {
        window.location = "./pages/spelregels"
    })

    starten.addEventListener("click", () => {
        window.location = "./pages/mastermind"
    })

    opties.addEventListener("click", () => {
        window.location = "./pages/opties"
    })

    if(musicState === "true"){
        const audio = new Audio("../media/MusicGame.mp3")

        audio.play()
        audio.volume = localStorage.getItem("volume")
    }

    window.addEventListener('DOMContentLoaded', () => {
        const lang = localStorage.getItem("lang")
        switch(lang){
            case "en": {
                innerHTMLChanger("Start the game", "Game rules", "Options")
                langChanger("en")
                localStorage.setItem("lang", "en")
                taal.options.selectedIndex = 0
            }; return;
            case "fr": {
                innerHTMLChanger("Commençer", "Règles du jeux", "Options")
                langChanger("fr")
                localStorage.setItem("lang", "fr")
                taal.options.selectedIndex = 1
            }; return;
            case "nl": {
                innerHTMLChanger("Spel starten", "Spelregels", "Opties")
                langChanger("nl")
                localStorage.setItem("lang", "nl")
                taal.options.selectedIndex = 2
            }; return;
            case "de": {
                innerHTMLChanger("Spiel starten", "Spielregeln", "Optionen")
                langChanger("de")
                localStorage.setItem("lang", "de")
                taal.options.selectedIndex = 3
            }; return;
            default:{
                innerHTMLChanger("Start the game", "Game rules", "Options")
                langChanger("en")
                localStorage.setItem("lang", "en")
                taal.options.selectedIndex = 0
            }
        }
    })

    taal.addEventListener("change", (e) => {
        let lang = taal.value
        switch(lang){
            case "en": {
                innerHTMLChanger("Start the game", "Game rules", "Options")
                langChanger("en")
                localStorage.setItem("lang", "en")
            }; return;
            case "fr": {
                innerHTMLChanger("Commençer", "Règles du jeux", "Options")
                langChanger("fr")
                localStorage.setItem("lang", "fr")
            }; return;
            case "nl": {
                innerHTMLChanger("Spel starten", "Spelregels", "Opties")
                langChanger("nl")
                localStorage.setItem("lang", "nl")
            }; return;
            case "de": {
                innerHTMLChanger("Spiel starten", "Spielregeln", "Optionen")
                langChanger("de")
                localStorage.setItem("lang", "de")
            }; return;
            default:{
                innerHTMLChanger("Start the game", "Game rules", "Options")
                langChanger("en")
                localStorage.setItem("lang", "en")
            }
        }
    })

    const innerHTMLChanger = function(start, rules, options){
        starten.innerHTML = start
        spelregels.innerHTML = rules
        opties.innerHTML = options
    }

    const langChanger = function(lang){
        document.documentElement.setAttribute("lang", lang);
    }
})()