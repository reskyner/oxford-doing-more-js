



function addFilmToBasket( f ) {

	let template = `
		<section class="film">
			<h4>${ f.title }</h4>
		</section>
	` ;

	let el = document.querySelector(".basket");
	el.innerHTML += template;

}

function drawFilm( f ) {

	let template = `
		<section class="film" id="${ f.id }">
			<img src="posters/${ f.image}" alt="${ f.title }" />
			<h4>${ f.title }</h4>
		</section>
	` ;

	let el = document.querySelector(".movies");

	el.innerHTML += template;

}

// =========================================

//let basket = [];

let films = [
	{ title:"Raging Bull", image:"ragingbull.jpg", id:"rb"},
	{ title:"GoodFellas", image:"goodfellas.jpg", id:"gf"},
	{ title:"Silence", image:"silence.jpg",id:"si"},
	{ title:"Taxi Driver", image:"taxidriver.jpg",id:"td"},
	{ title:"The Departed", image:"thedeparted.jpg",id:"dp"}
]

films.forEach( drawFilm );

let createdFilms = document.querySelectorAll( ".film");

createdFilms.forEach( init );


function init( el ) {
	el.addEventListener( "click", addBasket );
}

function addBasket(e) {
	
	let el = e.currentTarget;

	let id = el.id;

	// FIND functional programming style 
	let film = films.find( function(film) { return film.id === id } );

	el.removeEventListener( "click", addBasket );
	el.classList.add("selected");

	addFilmToBasket( film )
}


