Promise.prototype.myFinally = function(callback) {
 return this.then(value => callback().then(() => value), 
reason => callback().then(() => {throw reason}))
 
}

Promise.resolve(100)
  .myFinally(() => {
    return "ok";
  })
  .then(
    x => console.log(x), // 100
    x => console.log(x),
  );

Promise.resolve(100)
  .myFinally(() => {
    throw "oops";
  })
  .then(
    x => console.log(x),
    x => console.log(x), // "oops"
  );
