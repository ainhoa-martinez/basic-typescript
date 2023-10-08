
console.log("---------- 10-classes ----------");

/*
    Example of creating and using classes.
*/


export class Person {
    public name: string;
    public age: number;
    private adress: string; //(private) The variable is only visible inside the class

    // constructor(){ //Default constructor
    //     this.name = '';
    //     this.age = 0;
    //     this.adress = '';
    // }

    constructor(name: string, age: number, adress: string){ //Parameterized constructor
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
}

/** Create instances of the classes **/

//const character1 = new Person();
const character1 = new Person('Ainhoa', 24, 'Madrid');
console.log(character1);


/*
    Although there is a code error, in the console we see the result because the code is 
    translated to Javascript and does not differentiate the private type.

    We can declare that if there is an error in the code it will not compile, 
    in the typescript configuration file (tsconfig.json).

    //console.log(character1.adress);
*/


//export { Person }; //To avoid declaring this, we write export in the class declaration