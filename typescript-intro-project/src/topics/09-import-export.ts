
console.log("---------- 09-import-export ----------");

/*
    Example of importing: files, functional interfaces...
*/


import { ProductModel, taxCalculation2 } from "./08-functions-destructuring"; //Import interface and function from other file

const shoppingCart: ProductModel[] = [
    {
        description: 'Iphone 12',
        price: 900
    },
    {
        description: 'Ipad Air 2',
        price: 450
    }
]

const [total, tax] = taxCalculation2({products: shoppingCart, tax: 0.2});
console.log({total, tax});


/*
    Important: Function and interface exports should be declared in a file that does not execute other code,
    because the code is executed every time the function or method is imported.
*/