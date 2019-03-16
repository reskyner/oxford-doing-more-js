function draw( ob ) {

    var temp = Object.create(ob);
    for(var key in temp) {
        temp[key] = temp[key];
    }

	document.body.innerHTML += JSON.stringify( temp );
	document.body.innerHTML += "<hr/>";

}

// =====================================================

var fred = {
	age:46,
	name:"Fred Smith"
}

var jack = Object.create( fred );
draw( jack );

jack.name = "Jack Johnson";
jack.age = 21;
jack.hobby = "Flamenco";
jack.city = "Seville";
draw( jack );

fred.language = "Spanish";
fred.city = "Oslo";
draw( jack );

delete jack.city;

draw( jack );
