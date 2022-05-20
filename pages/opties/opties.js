"use strict";

(function (){
    const back = document.querySelector("#back-to-home")
    const audio = new Audio("../../media/MusicGame.mp3")
    const name = document.querySelector("#naam")
    const allRanges = document.querySelectorAll(".range-wrap")
    const muziek = document.querySelector("#muziek")
    const text = document.querySelector("#muziekstatus")

    let musicState = localStorage.getItem("music_state")
    let username = localStorage.getItem("username")

    name.value = username
    if(musicState === "true"){
        muziek.checked = true
        text.innerHTML = "(enabled)"
        audio.play()
    }
    else{
        muziek.checked = false
        text.innerHTML = "(disabled)"
        audio.pause()
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
        backgroundColor.style.backgroundPosition = `${newVal}% 0`
        bubble.innerHTML = val;
        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }


    muziek.addEventListener("click", e => {
        if (muziek.checked === true){
            text.innerHTML = "(enabled)";
            audio.play();
            localStorage.setItem("music_state", true)
        }
        else {
            text.innerHTML = "(disabled)";
            audio.pause();
            localStorage.setItem("music_state", false)
        }
    })

    name.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){
            localStorage.setItem("username", name.value)
        }
    })
})()