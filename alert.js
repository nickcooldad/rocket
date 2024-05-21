function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  obj = {firstName : firstName, lastName : lastName, fullName : firstName + "" + lastName}
  return obj
}




const namedOne = new NamedOne("Naomi", "Wang")

console.log(namedOne.firstName) //  "Naomi"
console.log(namedOne.lastName)  //  "Wang"
console.log(namedOne.fullName)  //  "Naomi Wang"

namedOne.firstName = "John"
console.log(namedOne.fullName)  //  "John Wang"

p.fullName = "Jane Smith";
console.log(namedOne.lastName)  //  "Jane"
console.log(namedOne.fullName)  //  "Smith"
