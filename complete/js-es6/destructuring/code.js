
// destructuring

let movie = {
	title:"Taxi Driver",
	actor:"Robert De Niro",
	director:"Martin Scorsese",
	from:"Columbia Pictures"
}

// Simple destructuring
let {title,actor} = movie;
let {director,from} = movie;

// Create and rename variables
let {director:dr, from:fr} = movie;
let {title:ti, actor:ac} = movie;

console.log( `${ac} appeared in ${ti} directed by ${dr} from ${fr}` );

let ticket = {
	start:"London",
	end:"Bath",
	price:74,
	company:"Great Western"
}

let {start,end,type="Second",company="Southern"} = ticket;

// Destructuring with nested objects

let trip = { 
	reason:"Holiday", 
	flight:{ 
		from:{fAirport:"Paris",fTime:"10.45"}, 
		to:{tAirport:"Vienna",tTime:"12.45"}
	}
}

let {flight:{from:{fAirport,fTime}}} = trip;
let {tAirport,tTime} = trip.flight.to;

// Rename both the FROM and TO objects to use airport and time property names.
// Then use renaming syntax to avoid overwriting variables.

// Function showB() destructures an object into named parameters passed into the function.

let flight = { 
	from:"Heathrow", 
	time:10.45,
	airline:"BA",
	gate:45
}

let showA = ob 
=> `I fly from ${ob.from} gate ${ob.gate} at ${ob.time} with ${ob.airline}.`;

showA( flight );

let showB = ({from,time,airline,gate}) 
=>  `I fly from ${from} gate ${gate} at ${time} with ${airline}.`;

console.log(showB( flight ));

let spain = [
	{ name:"Sevilla", 	region:"Andalusia", popl:1.2, temp:94, words:"dance sport" },
	{ name:"Valencia", 	region:"Valencia", popl:1.5, temp:70, words:"history sport" },
	{ name:"Barcelona", region:"Catalonia", popl:4.0, temp:88, words:"dance art" },
	{ name:"Granada", 	region:"Andalusia", popl:1.25, temp:70, words:"history sport"  },
	{ name:"Caceres", 	region:"Extremadura", popl:0.1, temp:84, words:"history art" },
	{ name:"Alicante", 	region:"Valencia", popl:0.7, temp:92, words:"dance history" },
	{ name:"Zaragoza", 	region:"Aragon", popl:0.7, temp:64, words:"sport art" },
	{ name:"Vigo", 		region:"Galician", popl:0.2, temp:60, words:"dance history" }
];

let cityTemps = spain.map( ({name,temp}) => ({name,temp}));
console.table( cityTemps );

spain.map( ({name,temp}) => console.log( `The temperature in ${name} is ${temp} degrees`));


// Destructure function return values

let makeCity = (city,temp) => ({ city:city,temp:temp }); // Refactor to ({ city,temp })
let {city,temp} = makeCity("Seville",45);


// Destructuring arrays 

// Give meaning to elements of an array
let person = [ "John", "Elton", 42, "Green", "Street"];
let [ last, first, age, party, town ] = person ;

// Convert hyphenated-string into variables.
let degree = "york-msc-physics-2-2018-serc" ;
let [ univ, category, subject, duration, yr, funding ] = degree.split("-");

