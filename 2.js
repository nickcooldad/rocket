Promise.prototype.myFinally = function(callback) {
  return this.then(value => Promise.resolve(callback())
  .then(() => value), 
  reason => Promise.resolve(callback())
  .then(() => {
    throw reason
  }))
 }