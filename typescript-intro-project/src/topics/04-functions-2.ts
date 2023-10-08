
console.log("---------- 04-functions-2 ----------");

/*
    Create and use functions in interfaces.
*/


interface CharacterModel {
    name: string;
    counter: number;
    showConter: () => void; //Create a function in the interface
}

const healCharacter = (character: CharacterModel, amount: number) => {
    character.counter += amount;
}


//Object
let character1: CharacterModel = {
    name: 'SuperWoman',
    counter: 50,
    showConter: function (): void {
        console.log(`Life points ${this.counter}`); // `` -> Indicates strings
    }
}

healCharacter(character1, 50);
character1.showConter();



export{};