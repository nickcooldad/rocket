// Object.prototype.set = function (link, target) {
//   let patchObj = this
//   link.split('.').forEach((key, index, array) => {
//     if (index === array.length - 1) {
//       patchObj[key] = target
//     }
//     if (!(key in patchObj)) {
//       patchObj[key] = {}
//     }
//     patchObj = patchObj[key]
//   });
// }

// Object.prototype.set = function (link, target) {
//   let patchObj = this
//   let linksArray = link.split('.')
//   for (let i = 0; i < linksArray.length - 1; i++) {
//     patchObj[linksArray[i]] ??= {}
//     patchObj = patchObj[linksArray[i]]
//   }
//   patchObj[linksArray.at(-1)] = target
// }

Object.prototype.set = function (patch, value) {
  let patchArray = link.split('.')
  let patchObj = this

  if(!(patch in patchObj)){
    return {}
  }
  
  if(count === linksArray.length - 1){
    patchObj[linksArray.at(-1)] = target
  }

  if(linksArray[count] in patchObj){
    patchObj = patchObj[linksArray[count]]
  }

  set(link)
  }

  const obj3 = {
    a: {
      b: {
        x: 1,
      },
    },
  };
  
  obj3.set("a.m.n.y", 8);
  
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
  