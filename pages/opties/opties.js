"use strict";

(function (){
    const back = document.querySelector("#back-to-home")
    back.addEventListener("click", () => {
        window.location = "../../"
    })

    const allRanges = document.querySelectorAll(".range-wrap");
    allRanges.forEach(wrap => {
        const range = wrap.querySelector(".range");
        const bubble = wrap.querySelector(".getalBovenSlider");

        range.addEventListener("input", () => {
            setBubble(range, bubble);
        });
        setBubble(range, bubble);
    });

    let audio = document.getElementById("audio");

    function setBubble(range, bubble) {
        let audio = document.getElementById("audio");
        const val = range.value;
        const min = range.min ? range.min : 0;
        const max = range.max ? range.max : 100;
        const newVal = Number(((val - min) * 100) / (max - min));
        bubble.innerHTML = val;
        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
        console.log(newVal/100);
        audio.volume = newVal/100;
        
        const backgroundColor = document.querySelector("#myRange")
        backgroundColor.style.backgroundPosition = `${newVal}% 0`

        bubble.innerHTML = val;
        
        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }


    document.getElementById("muziek").addEventListener("click", e => {let checkBox = document.getElementById("muziek");
        let text = document.getElementById("muziekstatus");
        

        if (checkBox.checked === true){
            text.innerHTML = "(enabled)";
            audio.play();
        }
        else {
            text.innerHTML = "(disabled)";
            audio.pause();
            audio.currentTime = 0;
        }})

        document.getElementById("spelers").addEventListener("click", e => {let checkBox = document.getElementById("spelers");
        let status = document.getElementById("spelerstatus");
        

        if (checkBox.checked === true){
            status.innerHTML = "(twee)";
        }
        else {
            status.innerHTML = "(één)";
            
        }

        
    })
})()