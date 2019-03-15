
class Game{

    constructor( ws ) {
        
        this.score = 0;
        this.letters = [];
        this.circles = document.querySelectorAll(".letter");
        this.wordSize = ws;

        this.circles.forEach( this.initLetter )
    }

    select = (e) => {

        let el = e.target;
        console.log( el );
    }

    initLetter = el => el.addEventListener( "click", this.select )

    gameOver = () => null

    disableLetter = ( el ) => null

}

let game = new Game(4);


