
(function() {

	function createPhrase( p ) {

		var phrase = p;
		var state = "en";
		var panel;
		var language = document.querySelector(".language");

		function _draw() {

			panel = document.createElement('section');
			language.appendChild( panel );

			//panel.classList.add("panel");
			panel.addEventListener( "click", _switchLanguage )
			_drawPhrase()
		}

		function _drawPhrase() {
			if(state === "en"){
				panel.innerHTML = phrase.en;
				panel.classList.add("en");
				panel.classList.remove("es");
			} else {
				panel.innerHTML = phrase.es;
				panel.classList.add("es");
				panel.classList.remove("en");
			}
		}

		function saveToLocalStorage(phrase) {

			var spanish;

			// Check if localStorage.spanish exists.
			if( typeof localStorage.spanish === "undefined") {
				spanish = [phrase];
				localStorage.spanish = JSON.stringify(spanish)
			} else {
				spanish = JSON.parse(localStorage.spanish);
				if( spanish.includes(phrase)) {
					// Do not add duplicates.
				} else {
					spanish.push(phrase);
					localStorage.spanish = JSON.stringify(spanish)
				}

			}
		}

		function _switchLanguage() {

			saveToLocalStorage( phrase.es );

			state = (state === "en") ? "es" : "en";
			_drawPhrase();
		}

		function _reset() {
			state = "en";
			_drawPhrase();
		}

		_draw();

		return {
			reset : _reset
		}

	}

	// •••••••••••••••••••••••••••••••••••••••••••••••

	function shuffle(ar) {
		return ar.sort(function(a,b) { return Math.random() > 0.5 })
	}

	var phrases = [
		{ en:"I live in a house",es:"Yo vivo en una casa"},
		{ en:"I have a dog",es:"Yo tengo un perro"},
		{ en:"I want a cat",es:"Yo quiero un gato"},
		{ en:"I need four books",es:"Yo necesito cuatro libros"}
	]

	phrases = shuffle(phrases);

	// •••••••••••••••••••••••••••••••••••••••••••••••

	var learning = [];

	phrases.forEach( function(phrase) {
		learning.push(createPhrase(phrase));
	})

	// •••••••••••••••••••••••••••••••••••••••••••••••

	var resetButton = document.querySelector(".reset");
	resetButton.addEventListener( "click", resetAll );

	function resetAll() {
		learning.forEach( function(l) {
			l.reset();
		})
		localStorage.clear();
	}

	// •••••••••••••••••••••••••••••••••••••••••••••••

}) () ;