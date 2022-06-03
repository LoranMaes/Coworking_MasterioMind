"use strict";
(function (){
    const back = document.querySelector("#back-to-home")
    const audio = new Audio("../../media/MusicGame.mp3")
    const name = document.querySelector("#naam")
    const allRanges = document.querySelectorAll(".range-wrap")
    const muziek = document.querySelector("#muziek")
    const text = document.querySelector("#muziekstatus")
    const spelers = document.querySelector("#spelers")
    const textSpelers = document.querySelector("#spelerstatus")
    const lang = localStorage.getItem("lang")
    let musicState = localStorage.getItem("music_state")
    let username = localStorage.getItem("username")
    back.addEventListener("click", () => {
        window.location = "../../"
    })

    allRanges.forEach(wrap => {
        const range = wrap.querySelector(".range");
        const bubble = wrap.querySelector(".getalBovenSlider");

        range.addEventListener("input", () => {
            setBubble(range, bubble);
        });
        setBubble(range, bubble);
    });

    function setBubble(range, bubble) {
        const backgroundColor = document.querySelector("#myRange")
        const val = range.value;
        const min = range.min ? range.min : 0;
        const max = range.max ? range.max : 100;
        const newVal = Number(((val - min) * 100) / (max - min));
        bubble.innerHTML = val;
        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
        audio.volume = newVal/100;
        localStorage.setItem("volume", audio.volume)
        backgroundColor.style.backgroundPosition = `${newVal}% 0`
        bubble.innerHTML = val;
        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }

    window.addEventListener("DOMContentLoaded", () => {
        name.value = username
        let state = []
        switch(lang){
            case "en": {
                console.log("test")
                state = ["enabled", "disabled"]
            }; break;
            case "fr": {
                state = ["activé", "desactivé"]
            }; break;
            case "nl": {
                state = ["geactiveerd", "gedesactiveerd"]
            }; break;
            case "de": {
                state = ["aktiviert", "deaktiviert"]
            }; break;
            default:{
                state = ["enabled", "disabled"]
            }
        }
        let playerState = []
        const playerAmount = localStorage.getItem("two_players")
        switch(lang){
            case "en": {
                playerState = ["one", "two"]
            }; break;
            case "fr": {
                playerState = ["un", "deux"]
            }; break;
            case "nl": {
                playerState = ["één", "twee"]
            }; break;
            case "de": {
                playerState = ["eins", "zwei"]
            }; break;
            default:{
                playerState = ["one", "twee"]
            }
        }
        if(playerAmount === "true"){
            spelers.checked = true
            textSpelers.innerHTML = `(${playerState[1]})`
        }
        else{
            spelers.checked = false
            textSpelers.innerHTML = `(${playerState[0]})`;
        }
    })

    spelers.addEventListener("click", e => {
        const playerAmount = localStorage.getItem("two_players")
        let playerState = []
        switch(lang){
            case "en": {
                playerState = ["one", "two"]
            }; break;
            case "fr": {
                playerState = ["un", "deux"]
            }; break;
            case "nl": {
                playerState = ["één", "twee"]
            }; break;
            case "de": {
                playerState = ["eins", "zwei"]
            }; break;
            default:{
                playerState = ["one", "twee"]
            }
        }
        if(playerAmount === "true"){
            spelers.checked = false
            textSpelers.innerHTML = `(${playerState[0]})`
            localStorage.setItem("two_players", false)
        }
        else{
            spelers.checked = true
            textSpelers.innerHTML = `(${playerState[1]})`;
            localStorage.setItem("two_players", true)
        }
    }) 

    muziek.addEventListener("click", e => {
        let state = []
        switch(lang){
            case "en": {
                state = ["enabled", "disabled"]
            }; return;
            case "fr": {
                state = ["activé", "desactivé"]
            }; return;
            case "nl": {
                state = ["geactiveerd", "gedesactiveerd"]
            }; return;
            case "de": {
                state = ["aktiviert", "deaktiviert"]
            }; return;
            default:{
                state = ["enabled", "disabled"]
            }
        }
        if (muziek.checked === true){
            text.innerHTML = `(${state[0]})`;
            audio.play();
            localStorage.setItem("music_state", true)
        }
        else {
            text.innerHTML = `(${state[1]})`;
            audio.pause();
            localStorage.setItem("music_state", false)
        }
    })

    name.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){
            localStorage.setItem("username", name.value)
        }
    })

    const title = document.querySelector("h1.title")

    const muziekText = document.querySelector("#muziekText")
    const nSpelersText = document.querySelector("#nSpelersText")
    const volumeText = document.querySelector("#volumeText")
    const naamText = document.querySelector("#naamText")
    const besteScoreText = document.querySelector("#besteScoreText")
    const volgOnsText = document.querySelector("#volgOnsText")

    const options = [muziekText, nSpelersText, volumeText, naamText, besteScoreText, volgOnsText]
    const langChanger = function(first, second, third, fourth, fifth, sixth){
        for(let i = 0; i < options.length; i++){
            switch(i){
                case 0: {
                    options[0].innerHTML = first
                }
                case 1: {
                    options[1].innerHTML = second
                }
                case 2: {
                    options[2].innerHTML = third
                }
                case 3: {
                    options[3].innerHTML = fourth
                }
                case 4: {
                    options[4].innerHTML = fifth
                }
                case 5: {
                    options[5].innerHTML = sixth
                }
            }
        }
    }

    switch(lang){
        case "en": {
            title.innerHTML = "OPTIONS"
            langChanger(
                "Music",
                "Number of players",
                "Volume",
                "Name",
                "Best Score",
                "Also follow us on"
            )
        }; return;
        case "fr": {
            title.innerHTML = "OPTIONS"
            langChanger(
                "Musique",
                "Nombre de joueurs",
                "Volume",
                "Nom",
                "Meilleur score",
                "Suivez-nous également sur"
            )
        }; return;
        case "nl": {
            title.innerHTML = "OPTIES"
            langChanger(
                "Muziek",
                "Aantal spelers",
                "Volume",
                "Naam",
                "Beste score",
                "Volg ons ook op"
            )
        }; return;
        case "de": {
            title.innerHTML = "OPTIONEN"
            langChanger(
                "Musik",
                "Anzahl der Spieler",
                "Band",
                "Name",
                "Bestes Ergebnis",
                "Folgen Sie uns auch auf"
            )
        }; return;
        default:{
            title.innerHTML = "OPTIONS"
            langChanger(
                "Music",
                "Number of players",
                "Volume",
                "Name",
                "Best Score",
                "Also follow us on"
            )
        }
    }
})()