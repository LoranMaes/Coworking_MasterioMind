"use strict";

(function (){
    const back = document.querySelector("#back-to-home")
    const audio = new Audio("../../media/MusicGame.mp3")
    const name = document.querySelector("#naam")
    const allRanges = document.querySelectorAll(".range-wrap")
    const muziek = document.querySelector("#muziek")
    const textMuziek = document.querySelector("#muziekstatus")
    const spelers = document.querySelector("#spelers")
    const textSpelers = document.querySelector("#spelerstatus")

    let musicState = localStorage.getItem("music_state")
    let username = localStorage.getItem("username")
    let playerAmount = localStorage.getItem("two_players")

    name.value = username
    if(musicState === "true"){
        muziek.checked = true
        textMuziek.innerHTML = "(enabled)"
        audio.play()
    }
    else{
        muziek.checked = false
        textMuziek.innerHTML = "(disabled)"
        audio.pause()
    }

    if(playerAmount === "true"){
        spelers.checked = true
        textMuziek.innerHTML = "(twee)"
    }

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


    muziek.addEventListener("click", e => {
        if (muziek.checked === true){
            textMuziek.innerHTML = "(enabled)";
            audio.play();
            localStorage.setItem("music_state", true)
        }
        else {
            textMuziek.innerHTML = "(disabled)";
            audio.pause();
            localStorage.setItem("music_state", false)
        }
    })

    spelers.addEventListener("click", e => {
        if (spelers.checked === true){
            textSpelers.innerHTML = "(twee)";
            localStorage.setItem("two_players", true)
        }
        else {
            textSpelers.innerHTML = "(één)";
            localStorage.setItem("two_players", false)
        }
    })


    name.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){
            localStorage.setItem("username", name.value)
        }
    })
})()