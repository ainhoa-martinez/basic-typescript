
console.log("---------- 13-decorators ----------");

/*
    Decorators.

    Add in tsconfig: "experimentalDecorators": true"
*/


function classDecorator<T extends { new(...args: any[]): {}}>(constructor: T){
    return class extends constructor {
        newProperty = 'Madrid';
        hello = 'override';
    }
}


class SuperClass {
    public myProperty: string = 'Example123';
    print(){
        console.log('Hello SuperClass');
    }
}

//Print the class definition
console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass); //Print an instance of the class



/** Observe how the definition of the class changes after adding the decorator to it **/


@classDecorator
class NewSuperClass {
    public myProperty: string = 'Example123';
    print(){
        console.log('Hello SuperClass');
    }
}


//Decorator properties have been added to the class
console.log(NewSuperClass);