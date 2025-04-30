/**
 *   This function adds products into an array, and return the array with the product added,
 *   it should read the inputs from the form and evaluate those values
 * @param {Array}  arrayOfProducts This is the array where you want to add products
 * @param {Object} productObject This represents the object you want to add into the array
 * @returns {Array} Return the same array modifyed
 */

const addNewProduct = (productObject, arrayOfProducts) =>{
    if(arrayOfProducts.includes(productObject)){

        alert(" ❌ This product is already in the list, please enter a different product")

    } else{

        arrayOfProducts.push(productObject);
    }
    return arrayOfProducts;
}

export {addNewProduct}

let button = document.createElement()

function sum(a, b){
    console.log(a+b)
}
function sum(c){
    console.log(c)
}
sum(3);
sum(2,4);
