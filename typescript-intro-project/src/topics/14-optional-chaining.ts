
console.log("---------- 14-optional-chaining ----------");

/*
    Optional chaining. Allows to check if a value exists and if not, do another action.
*/


export interface Passenger {
    name: string;
    childrens?: string[];
}


const passenger1: Passenger = {
    name: 'Ainhoa'
}

const passenger2: Passenger = {
    name: 'Mark',
    childrens: ['Lisa', 'Criss']
}


//Function
const printChildrens = (passenger: Passenger) => {

    /** Example of optional chaining **/

    //const howManyChildrens = passenger.childrens?.length;
    const howManyChildrens = passenger.childrens?.length || 0; //Optional chaining (If it does not have the children field it will return 0)
    
    

    //not null assertion operator

    console.log(passenger.name, howManyChildrens);
}

printChildrens(passenger1);
printChildrens(passenger2);



/** Not null assertion operator. If we are sure we are going to have a field, we can indicate it with a '!' **/
//Example
//const howManyChildrens = passenger.childrens!.length; //We know for sure that we will always have children (it is recommended to have a previous check)