window.onload = function () {

    document.getElementById("back").onclick = function Vissza() {
        kérdésSorszám--;
        if (kérdésSorszám < 0) {
            kérdésSorszám = kérdések.length - 1;
        }
        kérdésMegjelenítés(kérdésSorszám)
    }

    document.getElementById("next").onclick = function Előre() {
        kérdésSorszám++;
        if (kérdésSorszám == kérdések.length - 1) {
            kérdésSorszám = 0;

        }
        kérdésMegjelenítés(kérdésSorszám);

    }

    letöltés();

}

var kérdések;
var kérdésSorszám = 0;

function letöltés() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(data) {
    console.log("Sikeres letöltés")
    console.log(data)
    kérdések = data;
    kérdésMegjelenítés(0);
}

function kérdésMegjelenítés(kérdés)  {
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    
     console.log(kérdés);
     document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
     document.getElementById("válasz1").innerText = kérdés.answer1
     document.getElementById("válasz2").innerText = kérdés.answer2
     document.getElementById("válasz3").innerText = kérdés.answer3
     document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    

    válasz1.classList.remove("jó", "rossz")
    válasz2.classList.remove("jó", "rossz")
    válasz3.classList.remove("jó", "rossz")
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}   

válasz = function (n) {
    if (kérdések[kérdésSorszám].correctAnswer == n) {
        document.getElementById("válasz" + n).classList.add("jó");
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz");
    }
}