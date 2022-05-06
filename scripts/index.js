(function(){
    "use strict"
    const starten = document.querySelector("#starten_btn")
    const spelregels = document.querySelector("#spelregels_btn")
    const opties = document.querySelector("#opties_btn")
    const taal = document.querySelector("#taal_btn")

    spelregels.addEventListener("click", () => {
        window.location = "./pages/spelregels"
    })
})()