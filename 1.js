"use strict"

Object.prototype.set = function (patch, value) {
  const [key, ...restKeys] = patch.split('.')

  if(restKeys === 0){
    this[key] = value
    return
  }

  this[key] ??= {}
  this[key].set(restKeys.join("."), value);
}


const obj1 = {
  a: {
    b: {
      x: 1,
    },
  },
};

obj1.set("a.b.y", 6);
console.log(obj1)
// obj1 === {
//   a: {
//     b: {
//       x: 1,
//       y: 6,
//     },
//   },
// };

const obj2 = {
  a: {
    b: {
      x: 1,
    },
  },
};

obj2.set("a.b", 7);
console.log(obj2)
// obj2 === {
//   a: {
//     b: 7,
//   },
// };

const obj3 = {
  a: {
    b: {
      x: 1,
    },
  },
};

obj3.set("a.m.n.y", 8);
console.log(obj3)
// obj3 === {
//   b: {
//     x: 1,
//   },
//   a: {
//     m: {
//       n: {
//         y: 8,
//       },
//     },
//   },
// };
