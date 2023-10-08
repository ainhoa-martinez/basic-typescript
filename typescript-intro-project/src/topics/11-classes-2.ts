
console.log("---------- 11-classes-2 ----------");

/*
    Example of creating and using classes.
*/


export class Person {

    //Same class as the previous one, but defining the class in a short way
    //private adress: string = 'No Adress' - set a default value 
    constructor(public name: string, public age: number, private adress: string = 'No Adress'){}
}


const character1 = new Person('Ainhoa', 24);
console.log(character1);

const character2 = new Person('Ainhoa', 24, 'Madrid');
console.log(character2);



/** Class inheritance **/

//Inherits the attributes of the Person class
export class Hero extends Person {

    constructor(public realname: string, public power: number){
        super('IronMan', 33, 'New York'); //super - To call the constructor of the parent class
    }
}

const ironman = new Hero('Tony', 100);
console.log(ironman);


/*
    Classes with a single inheritance are easy to manage. 
    The problem is when there are multiple inheritances.
*/

//To avoid inheritance we can declare an instance of Person. This is something similar to dependency injection.

export class HeroNew {
    constructor(public realname: string, public power: number, public person: Person){}
}

const newPerson = new Person('IronMan', 33, 'New York');
const ironman2 = new HeroNew('Tony', 100, newPerson);
console.log(ironman2);