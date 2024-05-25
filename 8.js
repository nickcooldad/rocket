// Object.prototype.get = function (link) {
//   return link.split('.').reduce((acc, item) => {
//     if (acc === undefined) {
//       return undefined
//     }
//     return acc[item]
//   }, this)
// };

Object.prototype.get = function (link) {
    let prev = this
    for(let item of link.split('.')){
        if(prev[item] === undefined){
            return undefined
        }
        prev = prev[item]
    }
    return prev
  };