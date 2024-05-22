Object.prototype.get = function(link) {
return link.split('.').reduce((acc, item) => {
  if(acc === undefined || acc[item] === undefined){
   return undefined
  }
  return acc[item]
  } , this)
};


const obj = {
    b: {
      x: 1,
    },
    a: {
      m: {
        n: {
          y: 8,
        },
      },
    },
  };
  
  console.log(obj.get("b"));   // { x: 1 }
  console.log(obj.get("b.x")); // 1
  console.log(obj.get("b.m")); // undefined
  console.log(obj.get("b.q.w.e")); // undefined
  