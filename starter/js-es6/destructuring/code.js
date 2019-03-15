
// destructuring

let movie = {
	title:"Taxi Driver",
	actor:"Robert De Niro",
	director:"Martin Scorsese",
	from:"Columbia Pictures"
}

let ticket = {
	start:"London",
	end:"Bath",
	price:74,
	company:"Great Western"
}

let trip = { 
	reason:"Holiday", 
	flight:{ 
		from:{fAirport:"Paris",fTime:"10.45"}, 
		to:{tAirport:"Vienna",tTime:"12.45"}
	}
}

let flight = { 
	from:"Heathrow", 
	time:10.45,
	airline:"BA",
	gate:45
}

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

let person = [ "John", "Elton", 42, "Green", "Street"];

let degree = "york-msc-physics-2-2018-serc" ;