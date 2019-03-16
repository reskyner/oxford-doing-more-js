
// Block scope does not exist in ES5.
// Variable declarations are hoisted to top of containing scope

for (var j=0; j < 5; j++) {
	//
}
console.log( typeof j === "undefined" );

// ES6 LET variables have block-scope and are not hoisted.

for (let k=0; k < 5; k++) {
	//
}
console.log( typeof k === "undefined" );

// =====================================================

// The Temporal Dead Zone: a LET variable is not hoisted and cannot be
// tested for existence above its declaration.

if( true ) {
	console.log( typeof moon ); // undefined
	var moon = "Titan";
}

console.log( typeof moon );  // String

if( true ) {
	// Runtime error : console.log( typeof planet );
	let planet = "Saturn";
}

console.log( typeof planet === "undefined" ); 


// ES6 constants

const CITY = "Cambridge";

// Constants cannot be changed.
// CITY = "Oxford";

// Constants must have an initial value.
// const COUNTY

// Constants have block-level scope.
// Constants, like LET, are not hoisted.

if ( true ) {
	// Runtime error : console.log( typeof COUNTY );
	const COUNTY = "Cambs";
}

console.log( typeof COUNTY === "undefined" );

// ===================================================

// For complex objects/arrays, you are storing a constant reference.
// The properties/elements can still be changed.
//

const DENMARK = {
	lang : "Danish",
	capital : "Copenhagen"
}

DENMARK.lang = "Dansk";
DENMARK.capital = "København";

const fruit = [];

fruit.push( "Apples");
console.log( JSON.stringify( fruit ));

// Stop the array being changed.

const berries = Object.freeze( [] );

// So this will cause a runtime error:
// berries.push( "Blueberries");



// Some developers are using CONST, not LET by default, so that most
// code is immutable, by default, unless you explicitly choose otherwise.



