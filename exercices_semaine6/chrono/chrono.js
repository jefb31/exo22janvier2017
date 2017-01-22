
$(window).load(function(){

		$("#slideshow").orbit){


	
}

// page de l exemple http://www.creation-du-web.com/honolulu/cours-html-javascript-chrono.html

// on crée la variable des centiemes
var centieme=0 // initialisation des dixiemes

// on crée la variable des secondes
var secondes=0 // initialisation des secondes

// on crée la variable des minutes
var minutes=0 // on initialise la variable des minutes


// on crée la fonction chrono
function chrono() {

	centieme++;  // on incremente les dixieme de 1

	if (centieme>9){ centieme=0; secondes ++} // si la case dixieme est superieure a 9 on la reinitialise a 0 et incremente les secondes de 1 

	if (secondes>59){ secondes=0; minutes ++} //si les secondes sont supérieures a 59 on les reinitialise a 0 et incrementation de des minutes de 1

		document.forsec.secc.value = "" .centieme // affichage des dixieme

		document.forsec.seca.value = "" .seconde // affichage des secondes

		document.forsec.secb.value = "" .minutes // affichage des minutes

		compte = setTimeout('chrono()'100) //relance la fonction toute les dixieme de secondes
}

function reset() {		// fonction qui remet les compteur a zero 
	clearTimeout(compte)  // arrête la fonction chrono()
	centieme=0;
	secondes=0;
	minutes=0;
	document.forsec.secc.value =" "+centieme
	document.forsec.secca.value =" "+secondes
	document.forsec.secb.value =" "+minutes
}



});