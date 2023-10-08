
console.log("---------- 01-basic-types ----------");

/*
    Example of basic variable types.
*/


const name = "Ainhoa";
let counter: number | 'FULL' = 53;
let isActive: boolean = true;

//name = 53; //Error
//counter = 'Hello'; //Error, becasuse counter can be received only a number or de string 'FULL'
counter = 'FULL';


console.log({name, counter, isActive});



export {}; //To indicate that this file is a module