
// ES5 example creates multiple panels using module patterns.
// Each panel manages its own state.

function createPanel(ob) {

	var item = {
		name:ob.name,
		maximum:ob.maximum,
		quantity:0,
		id: _createID(ob.name)
	};

	var panel;
	var shop = document.querySelector(".shop");

	function _draw() {

		// <section class='panel'>Beans<span>4</span></section>

		panel = document.createElement('section');
		shop.appendChild( panel );
		panel.classList.add("panel");
		_drawNameAndQuantity();

		if( item.maximum === 0 ) {
			panel.classList.add("out-stock");
		} else {
			panel.addEventListener( "click", _redraw );
		}

		_getState();
	}

	function _createID(item) {
		return item.trim().toLowerCase() + "-" + Math.floor( Math.random() *1024 *1024 );
	}

	function _drawNameAndQuantity() {
		panel.innerHTML = item.name + "<span>" + item.quantity + "</span>" ;
	}

	function _redraw(e) {

		if( e.shiftKey ) {
			item.quantity = Math.max(item.quantity-1,0);
		} else {
			item.quantity = Math.min(item.maximum,item.quantity+1);
		}

		_drawNameAndQuantity();
	}

	function _getState() {
		console.log(JSON.stringify( item ))
	}

	function _reset() {
		item.quantity = 0;
		_drawNameAndQuantity();
	}

	_draw();

	return {
		reset : _reset
	}

}

// •••••••••••••••••••••••••••••••••••••••••••••••

var items = [
	{ name:"Beans",maximum:4},
	{ name:"Brocolli",maximum:2},
	{ name:"Bacon",maximum:0},
	{ name:"Blueberries",maximum:12},
	{ name:"Bread",maximum:1}
]

// •••••••••••••••••••••••••••••••••••••••••••••••

var basket = [];

items.forEach( function( item ) {
	basket.push(createPanel(item));
})

// •••••••••••••••••••••••••••••••••••••••••••••••

var resetButton = document.querySelector(".reset");
resetButton.addEventListener( "click", resetAll );

function resetAll() {
	basket.forEach( function(b) {
		b.reset();
	})
}

// •••••••••••••••••••••••••••••••••••••••••••••••
