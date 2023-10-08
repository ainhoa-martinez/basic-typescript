
console.log("---------- 03-functions ----------");

/*
    Create and use functions.
*/


function addValues(a: any, b: any) { //Type any: can receive a value of any type
    return a+b;
}

let result1: number = addValues(1, 2);
let result2: string = addValues(1, "Hola");
let result3: string = addValues("Hello", "Bye");
console.log({result1, result2, result3});


/** We set the type of the function parameters. **/

const addValuesArrow = (a: number, b: number): string => {
    return `${a + b}`; //Transform number to string
}

let result4: string = addValuesArrow(1,2);
console.log({result4});


/** Set required, optional and default parameters **/

//firstValue - mandatory
//secondValue - optional
//base - optional with default value
function multiply (firstValue: number, secondValue?: number, base: number = 2): number {
    console.log(secondValue);
    return firstValue * base;
}

console.log(multiply(2));
console.log(multiply(2,3));
console.log(multiply(2,3,4));



export{};