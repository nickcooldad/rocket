function Animal(name, ageInYears) {
  this.name = name.toUpperCase();
  this.ageInMonths = ageInYears * 12;
}

Animal.prototype.play = function() {
  return `${this.name} is playing`;
};

// -----------------------------------------
function Cat (name, age){
  Animal.call(this, name, age)
}

Cat.prototype.meow = function(){
  return `${this.name} says meow`
}
console.log (Cat.prototype.__proto__)
Object.setPrototypeOf(Cat.prototype, Animal.prototype)
// Cat.prototype.__proto__ = Animal.prototype
console.log (Cat.prototype.__proto__)
//Cat.prototype = Object.create(Animal.prototype)
//Cat.prototype.constructor === Cat

// -----------------------------------------

const barsique = new Cat("Barsik", 2);

console.log(barsique.name); // "BARSIK"
console.log(barsique.ageInMonths); // 24
console.log(barsique.meow())
console.log(barsique.play())

///////////////////------------------
class ObservableSet extends Set {
  constructor(cb, iterable){
    super(iterable)
    this.cb = cb
  }

  add(arg){
    super.add(arg)
    this.cb?.('add', [arg]);
    return this
  }

  delete(arg){
    const result = super.delete(arg)
    this.cb('delete', [arg])
  return result
  }

  clear(){
    super.clear()
    this.cb('clear', [])
  return this
  }
}