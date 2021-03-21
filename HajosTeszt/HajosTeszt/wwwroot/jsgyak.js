window.onload = () => {

	let hova = document.getElementById("ide")
	hova.innerHTML = "";

	for (var s = 0; s < 1; s++) {

		let sor = document.createElement("div");
		hova.appendChild(sor);
		sor.classList.add("egymásmellé");

		for (var o = 0; o < 10; o++) {
			let szám = document.createElement("div");
			sor.appendChild(szám);
			szám.innerText = (s + 1) * (o + 1);
			szám.classList.add("doboz");
			szám.style.color = "white";
			szám.style.backgroundColor = `rgb(${0},0,${255 - o * 30})`;

		}

	}
}