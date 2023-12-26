class Animal {
  constructor(name, price, model) {
    this.name = name;
    this.price = price;
    this.model = model;
  }
  newPrice(price) {
    return price + 2;
  }
}
const supra = new Animal("Supra", 1000000, 2018);
console.log(supra.name);
console.log(supra.price);
console.log(supra.model);
console.log(supra.newPrice(100000));
