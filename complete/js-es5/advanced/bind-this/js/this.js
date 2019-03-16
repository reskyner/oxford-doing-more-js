
// The runtime value of THIS within a function depends on how
// that function is called, not how it is written.

var japan = {
    capital:"Tokyo",
    temp:76
}

japan.getTemp = function() {
    console.log("TEMP", this.temp);
    console.log("THIS", this);
}

japan.setTemp = function(t) {
    this.temp = t;
}

var paraguay = {
    capital:"Asunción",
    temp:104
} ;

// ===========================================

// The value of THIS is bound to the object JAPAN.
japan.getTemp();

// ===========================================

// The value of THIS inside getTemp is bound to window, the global namespace. It fails.
// window.setTimeout( japan.getTemp , 1000 );

// Wrap it in an anonymous ES5 function. It works.
window.setTimeout( function() { japan.getTemp(); } , 50 );

// The arrow function lexically binds the value of THIS to japan. It works.
window.setTimeout( () => japan.getTemp() , 100 );

// Explicitly bind the value to japan. It works.
window.setTimeout( japan.getTemp.bind( japan ) , 150 );

// Create a new function which is bound to japan. It works.
let jp = japan.getTemp.bind( japan );
window.setTimeout( jp , 200 );

// ===========================================

let book = document.querySelector(".book");

// This binds the runtime value of THIS to the DOM element clicked on. It fails.
book.addEventListener( "click" , japan.getTemp );

// Add explicit binding to fix the problem.
book.addEventListener( "mouseenter" , japan.getTemp.bind( japan ));

// ===========================================

// BIND creates a new function, whose calling context is bound to paraguay.
let pg = japan.getTemp.bind( paraguay );
pg();

// Create a new function using bind and immediately execute it.
japan.getTemp.bind( paraguay ) () ;

// ===========================================
