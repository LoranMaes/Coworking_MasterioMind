(function(){
    "use strict"

    const close = document.querySelector("#close-to-menu")

    close.addEventListener("click", () => {
        window.location = "../../"
    })

    //CHANGE LANGUAGE
    const lang = localStorage.getItem("lang")
    const title = document.querySelector("h1.title")
    const langChanger = function(first, second, third, fourth, fifth){
        const rules = document.querySelectorAll(".rules li p")
        for(let i = 0; i < rules.length; i++){
            switch(i){
                case 0: {
                    rules[0 ].innerHTML = first
                }
                case 1: {
                    rules[1].innerHTML = second
                }
                case 2: {
                    rules[2].innerHTML = third
                }
                case 3: {
                    rules[3].innerHTML = fourth
                }
                case 4: {
                    rules[4].innerHTML = fifth
                }
            }
        }
    }

    switch(lang){
        case "en": {
            title.innerHTML = "GAME RULES"
            langChanger(
                "Try to find the secret code!",
                "You get 7 turns, find the code within the 7 turns you win the game!",
                "Black dot = correct dot on correct spot",
                "Red dot = correct dot on the wrong place",
                "Each incorrect row subtracts 1 point from your total score."
            )
        }; return;
        case "fr": {
            title.innerHTML = "RÈGLES DU JEU"
            langChanger(
                "Essayez de trouver le code secret!",
                "Vous avez 7 tours, trouvez le code dans les 7 tours et vous gagnez le jeu!",
                "Point noir = point correct au bon endroit",
                "Point rouge = point correct au mauvais endroit",
                "Chaque ligne incorrecte soustrait 1 point à votre score total."
            )
        }; return;
        case "nl": {
            title.innerHTML = "SPELREGELS"
            langChanger(
                "Probeer de geheime code te vinden!",
                "Je krijgt 7 beurten, vind je de code binnen de 7 beurten win je het spel!",
                "Zwart bolletje = juiste bolletje op juiste plaats",
                "Rood bolletje = juiste bolletje op verkeerde plaats",
                "Per foutieve rij gaat er 1 punt van je totaalscore af"
            )
        }; return;
        case "de": {
            title.innerHTML = "SPIELREGELN"
            langChanger(
                "Versuche, den Geheimcode zu finden!",
                "Du hast 7 Runden, finde den Code innerhalb der 7 Runden und du gewinnst das Spiel!",
                "Schwarzer Punkt = richtiger Punkt an der richtigen Stelle",
                "Roter Punkt = richtiger Punkt an der falschen Stelle",
                "Jede falsche Zeile zieht 1 Punkt von Ihrer Gesamtpunktzahl ab."
            )
        }; return;
        default:{
            title.innerHTML = "GAME RULES"
            langChanger(
                "Try to find the secret code!",
                "You get 7 turns, find the code within the 7 turns you win the game!",
                "Black dot = correct dot on correct spot",
                "Red dot = correct dot on the wrong place",
                "Each incorrect row subtracts 1 point from your total score."
            )
        }
    }
})()
