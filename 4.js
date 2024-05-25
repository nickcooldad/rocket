function Person(firstName, lastName) {
  // this = { __proto__: Person.prototype }
  this.firstName = firstName
  this.lastName = lastName
  // return this
}

Object.defineProperty(Person.prototype, 'fullName', {
  set(full) {
    let [name, family] = full.split(' ')
    this.firstName = name
    this.lastName = family
  },
  get() {
    return `${this.firstName} ${this.lastName}`
  },
})

const person = new Person("Naomi", "Wang")
const person2 = new Person("A", "B")

console.log(person.firstName) //  "Naomi"
console.log(person.lastName)  //  "Wang"
console.log(person.fullName)  //  "Naomi Wang"

person.firstName = "John"
console.log(person.fullName)  //  "John Wang"

p.fullName = "Jane Smith";
console.log(person.lastName)  //  "Jane"
console.log(person.fullName)  //  "Smith"
