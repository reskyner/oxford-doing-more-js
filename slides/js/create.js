
( function() {

	var slides = [
		{ h : "Doing More With Javascript" , t : "John Coumbe, Oxford March 2019" },
		{ h : "Douglas Crockford" , t : "'A beautiful, elegant, highly expressive language that is buried under a steaming pile of good intentions and blunders.'" },
		{ h : "1995" , 	t : "Javascript was created in 10 days by one man, Brendan Eich" },
		{ h : "Javascript" , t : "Simple syntax, some complex ideas" },
		{ h : "Expressive language" , t : "A very relaxed language. There are no types." },
		{ h : "Expressive language" ,	t : "Arrays, objects, variables and functions can be COMBINED in many ways" },
		{ h : "Scope" ,	t : "Scope is difficult, and comes in two flavours: lexical (functions,closure) and dynamic (bind,this)" },
		{ h : "Objects and classes" ,	t : "This is not a regular object oriented language." },
		{ h : "Objects" ,	t : "Objects are central to Javascript. Almost everything is an object." },
		{ h : "Functions" ,	t : "Understand functions. Use them to structure code and manage scope" },
		{ h : "JS Ecosystem" ,	t : "Javascript, ES5, ES6, Angular, React, Node, jQuery" },
		{ h : "Frameworks" ,	t : "Develop a good understanding of Javascript ES6 before looking at Angular and React." },
		{ h : "Typescript" ,	t : "Adds types to Javascript. A compile-time technology not a run-time" },
		{ h : "Functional" ,	t : "Use PURE functions to transform data: map, filter, reduce, sort, forEach." }	
	]

	var position = 0;

	function draw() {
		$(".slide h2").text( slides[ position ].h );
		$(".slide h4").text( slides[ position ].t );
	}

	function setupKeys() {

		$( document ).on( "keyup", function(e) {

			var LEFT = 37;
			var RIGHT = 39;

			if( e.keyCode === LEFT ) {
				position = Math.max( position-1 , 0 );
			}

			if( e.keyCode === RIGHT ) {
				position = Math.min( position+1 , slides.length-1 );
			}

			draw();

		}) ;
	}

	setupKeys();
	draw();

}) () ;
