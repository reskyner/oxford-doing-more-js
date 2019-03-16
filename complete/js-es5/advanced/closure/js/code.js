// code.js

function setScale(s) {
    var scale = s;
    return function(t) {
        return { temp:t, scale:s }
    }
}

// Function setTemp retains a memory of variable "scale" that was in scope
// when the function was created. The variable is private to that function.

var setTemp = setScale("Celsius");

console.dir(setTemp);

console.log(setTemp(24));

// ==================================================================

function setWeather( t,s ) {

    var weather = { temp:t, scale:s };

    function _setTemp(t) {
        (typeof t === "number") ? weather.temp = t : null;
    }
    function _getWeather() {
        return weather;
    }

    return {
        getWeather : _getWeather,
        setTemp : _setTemp
    }
}

var tuesday = setWeather( 42,"farenheit" ) ;
console.log(tuesday.getWeather());
tuesday.temp = "green";
tuesday.setTemp("green");
console.log(tuesday.getWeather());

console.dir( tuesday );

// Object tuesday publicly exposes 2 methods getWeather and setTemp.
// It has private access through closure to _setTemp,_getWeather,weather, t and s.
