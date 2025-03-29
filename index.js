const compMöglichkeiten = ["Schere", "Stein", "Papier"]; 
const compWahl =  Math.floor(Math.random() * compMöglichkeiten.length);
let spielerWahl;
let h5 = document.getElementById("h5");
let compimg = document.getElementById("computer-attack");




function main(auswahl) {
	//Wahlen festlegen und in Konsole darstellen
	spielerWahl = auswahl;
	console.log(`Spielers Wahl: ${spielerWahl}`)
	console.log("Computers Wahl: " + compMöglichkeiten[compWahl])
	
	
	//Computer Auswahl Bilder hinzufügen
	if (compMöglichkeiten[compWahl] == "Schere") {
		const imgSchere = document.createElement("img");
		imgSchere.src = "schere.png"; 
		compimg.appendChild(imgSchere);
		imgSchere.classList.add("computerChoice");
	}
	else if (compMöglichkeiten[compWahl] == "Stein") {
		const imgStein = document.createElement("img");
		imgStein.src = "faust.png"; 
		compimg.appendChild(imgStein);
		imgStein.classList.add("computerChoice");
	}
	else if (compMöglichkeiten[compWahl] == "Papier") {
		const imgPapier = document.createElement("img");
		imgPapier.src = "papier.png"; 
		compimg.appendChild(imgPapier);
		imgPapier.classList.add("computerChoice");
	}
	
	
	
	
	//VERGLEICHE
	//Spieler gewinnt
	if ((spielerWahl == "Schere" && compMöglichkeiten[compWahl] == "Papier") ||
		(spielerWahl == "Stein" && compMöglichkeiten[compWahl] == "Schere") || 
   	    (spielerWahl == "Papier" && compMöglichkeiten[compWahl] == "Stein")
	) {
	console.log("Spieler gewinnt")
	h5.textContent = "Computer wählt: " + compMöglichkeiten[compWahl] + ". Sie haben gewonnen!"
}
	
	//Gleiche Auswahl
	else if (spielerWahl === compMöglichkeiten[compWahl]) {
		console.log("Unentschieden")
		h5.textContent = "Computer wählt: " + compMöglichkeiten[compWahl] + ". Unentschieden!"
	}	

	
	//Computer gewinnt
	else {console.log("Computer gewinnt")
		h5.textContent = "Computer wählt: " + compMöglichkeiten[compWahl] + ". Sie haben verloren!"
		}
	
	
	
}





