async function filterProducts(catalog, minPrice, maxPrice) {
  return [];
}


const catalog = new Category("Catalog", true, [
  new Category("Electronics", true, [
    new Category("Smartphones", true, [
      new Product("Smartphone 1", true, 1000),
      new Product("Smartphone 2", true, 900),
      new Product("Smartphone 3", false, 900),
      new Product("Smartphone 4", true, 900),
      new Product("Smartphone 5", true, 900)
    ]),
    new Category("Laptops", true, [
      new Product("Laptop 1", false, 1200),
      new Product("Laptop 2", true, 900),
      new Product("Laptop 3", true, 1500),
      new Product("Laptop 4", true, 1600)
    ]),
  ]),
  new Category("Books", true, [
    new Category("Fiction", false, [
      new Product("Fiction book 1", true, 350),
      new Product("Fiction book 2", false, 400)
    ]),
    new Category("Non-Fiction", true, [
      new Product("Non-Fiction book 1", true, 250),
      new Product("Non-Fiction book 2", true, 300),
      new Product("Non-Fiction book 3", true, 400)
    ]),
  ]),
]);

const minPrice = 300, maxPrice = 1500;

filterProducts(catalog, minPrice, maxPrice)
  .then(products => console.log(products));


  function helper(cb, value, ok = true, ms = 10) {
    setTimeout(() => {
      if (ok) {
        cb(null, value); // success
      } else {
        cb("error"); // bad luck
      }
    }, ms);
  }
  
  class Category {
    #name;
    #inStock;
    #children;
  
    constructor(name, inStock, children) {
      this.#name = name;
      this.#inStock = inStock;
      this.#children = children;
    }
  
    getName(cb) {
      helper(cb, this.#name);
    }
    checkInStock(cb) {
      helper(cb, this.#inStock);
    }
    getChildren(cb) {
      helper(cb, this.#children);
    }
  }
  
  class Product {
    #name;
    #inStock;
    #price;
  
    constructor(name, inStock, price) {
      this.#name = name;
      this.#inStock = inStock;
      this.#price = price;
    }
  
    getName(cb) {
      helper(cb, this.#name);
    }
    checkInStock(cb) {
      helper(cb, this.#inStock);
    }
    getPrice(cb) {
      helper(cb, this.#price);
    }
  }
  

  // products === [  
  //   { name: "Non-Fiction book 2", price: 300 },  
  //   { name: "Non-Fiction book 3", price: 400 },  
  //   { name: "Laptop 2", price: 900 },  
  //   { name: "Smartphone 2", price: 900 },  
  //   { name: "Smartphone 4", price: 900 },  
  //   { name: "Smartphone 5", price: 900 },  
  //   { name: "Smartphone 1", price: 1000 },  
  //   { name: "Laptop 3", price: 1500 }  
  // ]
  