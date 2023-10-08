
console.log("---------- 02-object-interface ----------");

/*
    Simple example of interfaces and objects.
*/


//let skills = ['Energy', 'Shoot', 'Drive', 123, true]; //Multiples types
let skills: string[] = ['Energy', 'Shoot', 'Drive'];


//Interface: Allows typing objects
interface CharacterModel {
    name: string;
    counter: number;
    skills: string[];
    hometown: string;
    favoriteFood?: string; //Optional
}


//Object
let character1: CharacterModel = {
    name: 'SuperWoman',
    counter: 100,
    skills: ['Energy', 'Drive'],
    hometown: 'New York'
}


character1.favoriteFood = 'pizza';

console.log(skills);
console.table(character1);



export {}; //To indicate that this file is a module