
console.log("---------- 08-functions-destructuring ----------");

/*
    Destructuring: helps us obtain information about an object more quickly.
    Example with functions.
*/


export interface ProductModel { //We export the interface so that it is visible in the rest of the files
    description: string;
    price: number;
}


const phone: ProductModel = {
    description: 'Iphone 7',
    price: 800
}

const tablet: ProductModel = {
    description: 'Ipad Air',
    price: 400
}

const shoppingCart = [phone, tablet];
const tax = 0.15;



interface TaxCalculationOptions {
    tax: number;
    products: ProductModel[];
}

//The idea of putting options in an interface is to prevent having more than three parameters in a method (not recommended).
function taxCalculation (options: TaxCalculationOptions): number[] {
    let total = 0;

    options.products.forEach(product => {
        total += product.price;
    });

    return [total, total*options.tax];
}

const result1 = taxCalculation({products: shoppingCart, tax});
console.log(`Result 1 -> Total: ${result1[0]}, Tax: ${result1[1]}`);



//Same code, but applying destructuring:

export function taxCalculation2 (options: TaxCalculationOptions): [number, number] { //We export the fuction so that it is visible in the rest of the files
    let total = 0;

    const {tax, products} = options;

    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax];
}

const [finalTotal, finalTax] = taxCalculation2({products: shoppingCart, tax});
console.log(`Result 1 -> Total: ${finalTotal}, Tax: ${finalTax}`);



export {};