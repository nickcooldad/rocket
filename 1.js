Promise.prototype.myCatch = function(callback) {
  return this.then(undefined, callback)
}

