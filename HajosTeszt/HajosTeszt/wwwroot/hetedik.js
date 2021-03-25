window.onload = letöltés() && kérdésMegjelenítés(kérdés)
var kérdések;
function letöltés() {
    fetch("/questions.json")
        .then(response => response.json())
        .then(d => letöltésBefejeződött(d)
        );
}
function letöltésBefejeződött(data) {
    console.log("Sikeres letöltés")
    console.log(data)
    kérdések = data;
}

function kérdésMegjelenítés(kérdés) {

}
function Next() { document.body.style.backgroundColor = "#ff0000"; }
function Back() { document.body.style.backgroundColor = "#00ff00"; }
