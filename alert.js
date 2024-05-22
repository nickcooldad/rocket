const isObjadnNull = (obj) => typeof obj === 'object' && !Array.isArray(obj)

function objectCreate(prototype) {
if(isObjadnNull(prototype)){
  throw TypeError('Object prototype may only be an Object or null')
}
let obj = {}
Object.getOwnPropertyNames(prototype).forEach(proto => {
  let descriptor = Object.getOwnPropertyDescriptor(prototype, proto)
  Object.defineProperty(obj, proto, descriptor)
})
return obj
}

const obj1 = Object.create(null);
const obj2 = Object.create(null);

console.log("constructor" in obj1); // true
console.log("constructor" in obj2); // false

const obj3 = { a: 1 };
const obj4 = Object.create(obj3);

console.log(obj4.a === 1);
