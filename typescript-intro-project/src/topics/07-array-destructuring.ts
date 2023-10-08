
console.log("---------- 07-array-destructuring ----------");

/*
    Destructuring: helps us obtain information about an object more quickly.
    Example with arrays.
*/


const characters: string[] = ['Homer', 'Lisa', 'Bart']

console.log('Character 1:', characters[0]);
console.error('Character 4:', characters[4] || 'Not found character 4'); //Indicates that if index 4 is not found, display the message

const error = characters[4] || 'Not found character 4';
console.error('Character 4:', error);



//Array destructuring: same idea as basic destructuring file.

//If we only need the value of array 3, we must leave the previous spaces empty.
//We can write a default value in case we don't find the index.

//const [p1, p2, p3] = characters;
const [, , p3, p4 = 'Not found'] = characters;

console.log('P3 -> ', p3);
console.log('P4 -> ', p4);



export{};