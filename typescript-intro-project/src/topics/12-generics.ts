
console.log("---------- 12-generics ----------");

/*
    Generics.

    Example: I want a method that can receive any type of argument.
    It is recommended to try not to use 'any' (because it does not have any restrictions)
*/


//Example of generic function
//We can write any letter, in this case T. 
//Indicates that the type of parameter received is the one that will be worked with and the type that will be returned.
export function whatsMyType<T> ( argument: T ): T{
    return argument;
}


//Now we can use the function with any type of data and it will recognize it.
let iAmString = whatsMyType('Hello world');
let iAmNumber = whatsMyType(24);
let iAmArray = whatsMyType([1, 2, 3, 4, 5]);

console.log(iAmString.split(' '));
console.log(iAmNumber.toFixed());
console.log(iAmArray.join('-'));


//We can also control that the function only receives a specific type as a parameter using generics
let iAmOnlyString = whatsMyType<string>('Hello world 2');
console.log(iAmOnlyString);