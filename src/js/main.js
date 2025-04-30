/*
        Management shopping list 

You need being able to create, read( Show the list of products ), update and delete products.

* Implement a function to addProducts(product), to add a new product at the end of the list.
* Create a function to deleteProduct(product) to delete a product from the list.
* Show all the products you have created.
* Make sure to not have repeated products.
* Use arrow functions and characteristics from ECMAScript

 */

class product{

    constructor( productName, productAmount, productImageURL, productDescription, productBasePrice){
        this.productName = String(productName);
        this.productAmount = productAmount;
        this.productImageURL = productImageURL;
        this.productDescription = productDescription;
        this.productBasePrice = productBasePrice;
    }
    
    getAllInfo(){
        console.log(`
            Product's name: ${this.productName}\n
            Availability: ${this.productAmount}\n
            URL image: ${this.productImageURL}\n
            Product description: ${this.productDescription}\n
            `);
    }

}

const productList = [];



const nozzle = new product(`Nozzle`, 4,`thisisarepresentationofanRUL`, `This Nozzle is common to use in printers like Bambulab or Creality printers`, 145.6);

productList.push(nozzle);

console.log(productList);

