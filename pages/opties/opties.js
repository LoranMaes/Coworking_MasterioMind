"use strict";


(function (){
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".getalBovenSlider");

    range.addEventListener("input", () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
});

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;

    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}


    document.getElementById("muziek").addEventListener("click", e => {let checkBox = document.getElementById("muziek");
        let text = document.getElementById("muziekstatus");

        if (checkBox.checked === true){
            text.innerHTML = "(enabled)";
        } else {
            text.innerHTML = "(disabled)";
        }})



} ())

