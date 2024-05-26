Object.prototype.set = function (link, target) {
  let patchObj = this
  link.split('.').forEach((key, index, array) => {
    if (index === array.length - 1) {
      patchObj[key] = target
    }
    if (!(key in patchObj)) {
      patchObj[key] = {}
    }
    patchObj = patchObj[key]
  });
}

Object.prototype.set = function (link, target) {
  let patchObj = this
  let linksArray = link.split('.')
  for (let i = 0; i < linksArray.length - 1; i++) {
    patchObj[linksArray[i]] ??= {}
    patchObj = patchObj[linksArray[i]]
  }
  patchObj[linksArray.at(-1)] = target
}

Object.prototype.set = function (patch, value, patchObj = this, index = 0) {
  const patchLink = patch.split('.')
  if(index === patchLink.length - 1){
    patchObj[patchLink[index]] = value
    return
   }

  patchObj[patchLink[index]] ??= {}
  patchObj = patchObj[patchLink[index]]
  set(patch, value, patchObj , index + 1)
}


  


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
  