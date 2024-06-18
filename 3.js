 //Промисы - 15
 //1 - способ reduce 
 function compose(fns) {
  return (arg) => fns.reduceRight((acc, item) => acc.then(value => item(value)), Promise.resolve(arg))
 } 

//2 - способ 
function  compose(fns){
    return (arg) => fns.reduceRight(async (acc, fn) => fn(await acc), Promise.resolve(arg))
  } 