(function(){
    "use strict"

    const close = document.querySelector("#close-to-menu")

    close.addEventListener("click", () => {
        window.location = "../../"
    })

    const scoreList = document.querySelector("ol");
    const getAllScores = async () => {
        try {
            const result = await fetch("https://backend.lukasdownes.ikdoeict.be/masteriomind");
            if(!result.ok) throw Error()
            const data = await result.json();
            maakLijst(data.data);
        } catch(err) {
            console.log(err)
        }
    }
    const maakLijst = (scores) => {
        scores.forEach(el => {
            let li = document.createElement("li");
            let htmlText = `<h2>${el.name}</h2><span>${el.score}</span>`
            li.innerHTML = htmlText;
            scoreList.appendChild(li);
        });
    }
    getAllScores();
})()

//TO DO: transelate
// rules correction 