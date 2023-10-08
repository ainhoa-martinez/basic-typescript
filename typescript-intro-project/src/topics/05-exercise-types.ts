
console.log("---------- 05-exercise-types ----------");

/*
    Create and use nested interfaces.
*/


interface SuperHero {
    name: string;
    age: number;
    address: AdressModel;
    showAddress: () => string;
}

interface AdressModel {
    street: string;
    country: string;
    city: string;
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );



export {};