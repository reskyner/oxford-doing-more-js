
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

        el.classList.add("anim");
        this.score++;
        this.letters.push( el.textContent );
        this.disableLetter( el );

        if( this.score === this.wordSize) {
            this.gameOver();
        } 

        console.log( this.letters )
    }

    initLetter = el => el.addEventListener( "click", this.select )

    gameOver = () => {
        let el = document.querySelector(".revealWord")
        el.textContent = this.letters.join("")
        el.classList.add("reveal");
        this.circles.forEach( this.disableLetter )
    }

    disableLetter = ( el ) => el.removeEventListener( "click", this.select )

}

let game = new Game(4);


