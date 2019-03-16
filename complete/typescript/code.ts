/*
- TYPESCRIPT 

- Install:                  npm install -g typescript
- Compile in watch mode:    tsc code.ts -w

- An optional type system for JS
- More understandable self-documenting code.
- Catch errors at compile time, not runtime
- TS does not exist at run-time.

https://www.typescriptlang.org/play/

// TS offers 2 advantages:

// Generates compile-time errors EARLY in terminal inside editor (Visual Studio)
// Self-documenting code that describes your intentions to you/team.

*/

// Basic types ==============================

let city : string = "Oxford"; 
let year:number = 2018;
let smoker:boolean = false;
let project:any = {};
project = 45;

// Variables can still be defined without types.
let player = "Ronaldo";

// FUNCTIONS : type arguments & return types

const double = (n:number):number => n*2;

// ====================================== Complex types 

// Use CLASS as custom type : does exist at run time 
// Do have to instantiate : new Person( ...... )

// TS INTERFACE : named composite/custom type 
// Interface does NOT exist at run-time.

interface Person{
    name:string;
    age?:number; // optional
}

interface Author extends Person{
    fiction:boolean;
    readonly genre:string; // cannot change this later
}

// Give TS a hint : type-assertion
let fred : Person = {} as Person;

fred.name = "Frederick Johannsen";
fred.age = 84;

let mary : Author = {
    name : "Mary Fredericksdottir",
    age : 21,
    fiction : true,
    genre : "crime"
}

// mary.genre = "Romance";

let people : Person[] = [ fred,mary ];
// let people : Array<Person> = [ fred,mary ];

const describe = (p:Person) => console.log( `${p.name} is ${p.age} years old.`);

people.forEach( describe );

// Enumerated types ====================

enum Direction { Left, Right, Up, Down };
let turn:Direction = Direction.Left;

enum Size { ExtraSmall, Small, Medium, Large, ExtraLarge };
let xl: Size = Size.ExtraLarge;

console.log( Size[0], typeof Size[0] );
console.log( Size.ExtraSmall, typeof Size.ExtraSmall );

// Generics : class List accepts arrays of a consistent type
// and works for various types.

  class List<T> {

    private items = [];

    add = (item:T) => this.items.push( item );

    remove = ():T => this.items.shift()
}

let fruit = new List<string>();
fruit.add("apples");
fruit.remove();

let sequence = new List<number>();
sequence.add(64);