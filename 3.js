 //Промисы - 15
 function compose(fns) {
  return (arg) => fns.reduceRight((acc, item) => acc.then(value => item(value)), Promise.resolve(arg))
 } 