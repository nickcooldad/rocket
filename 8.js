function compose(fns) {
  return fns.reduceRight(compose2, (x, cb) => cb(null, x))
}


function compose2(fn1, fn2){
return (arg, cb) => {
  fn1(arg, (err, result) => {
    if(err === null){
      fn2(result, (err2, result2) => {
        if(err2 === null){
          return cb(null, result2)
        }
          return cb(err2)
      })
    } else {
        return cb(err)
      }
  })
}
}
  function cube(x, cb) {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        cb(null, x ** 3);
      } else {
        cb(`cube(${x}) error`);
      }
    }, 500);
  }
  
  function double(x, cb) {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        cb(null, x * 2);
      } else {
        cb(`double (${x}) error`);
      }
    }, 500);
  } 
  function subtract5(x, cb) {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        cb(null, x - 5);
      } else {
        cb(`subtract5 (${x}) error`);
      }
    }, 500);
  } 

  // const foo = compose2(cube, double)

  // foo(2, (err, result) => {
  //   console.log({err, result}) // 16
  //  })
cube(2, (err, result) => console.log(result === 8));
double(2, (err, result) => console.log(result === 4));
subtract5(2, (err, result) => console.log(result === -3));

const composed = compose([cube, double, subtract5]);

composed(8, (err, result) => {
  console.log(err, result);
});
