
// ES6 arrow functions

// A simple arrow function has a name, argument and return value.
let double = n => n*2;
double(2);

// A multiple-line arrow function requires brackets and a return statement
let debugDouble = n => {
	console.log(n);
	return n*2;
}
debugDouble(2);

// If you pass more than 1 argument, you need to add paretheses
let add = (a,b) => a+b;

// A function with NO arguments needs paretheses.
let getYear = () => "2016";

// To return an object, wrap {} in ()
let createCity = (c,n) => ( {city:c, nation:n })

console.log( createCity("Oxford","UK"));

// An anonymous arrow function
(a,b) => a*b

// A self-executing anonymous arrow function
((a,b) => a*b) (4,2);

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Lexical binding of THIS in arrow functions.

class Animal {

	constructor( s ) {
		this.init();
		this.sound = s;
	}

	init() {
		
		// this.speak = this.speak.bind( this );

		document.querySelector(".heading")
		.addEventListener( "click" , this.speak );
	}

	// Arrow function lexically binds the value of THIS
	// to the code that contains it, i.e. this class.

	speak = () => console.info( this, this.sound );

	// Value of THIS is bound to DOM element clicked on
	// unless explicit binding used in constructor.

	// speak() {
	// 	console.info( this, this.sound );
	// }
}

let duck = new Animal( "Quack" );
