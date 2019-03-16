
// Spread operator

let france = [ "Paris","Lyon" ];
let spain = [ "Madrid","Seville" ];

// Simple assignment causes copy-by-reference: 2 pointers to same array.
// let copy = france

// The spread operator creates a new independent copy
let copy = [...france];

// This code creates a nested array of arrays.
let holiday = [ france,spain ];

// The spread operator creates one array of four strings.
holiday = [ ...france, ...spain ];

// We can create a copy and then augment it.
let journey = [ ...france, "Marseilles","Nice" ];

// Reverse is not a PURE function. It changes the original. 
// journey.reverse()

// This reverses a copy of the original.
let returnJourney = [...journey].reverse();

// Spread operator on objects.
let info = {
	name : "Fred Jones",
	age : 64
}

// This is a new object. 
// It does NOT have a prototypal link to the original.

let extendedInfo = {
	...info,
	smoker:false,
	dance:"Flamenco"
}

// A FUNCTION defined with a spread operator in its signature
// will gather parameters passed to it into an array.

let train = ( ...stops ) => {
	console.log( "From", stops[0],"to",stops[stops.length-1] );
}

train("Reading","Pangbourne","Goring","Didcot","Oxford");

let getTotal = (...values) => values.reduce((a,b) => a+b);

let getLargest = (...vals) => vals.reduce((a,b) => Math.max(a,b));

let getAverage = (...vs) => vs.reduce((a,b) => a+b) / vs.length;

let getSmallest = (...v) => v.reduce((a,b) => Math.min(a,b));

// REACT uses the spread operator to avoid directly mutating state.

// Avoid this.state.basket.push("bread");
// Instead, create a copy, add to the copy and pass to setState
// let copy = [ ...this.state.basket, "bread" ]
// this.setState( { basket:copy });