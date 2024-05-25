class VersionManager {
    constructor(arg = "0.1.0"){
        this.arg = [arg.split('.').map(Number)]
      }
    
    major(){
     const [major] = this.arg.at(-1)
      this.arg.push([major + 1, 0, 0])
      return this
    }
  
    minor(){
      const [major, minor] = this.arg.at(-1)
      this.arg.push([major, minor + 1, 0])
      return this
    }
  
    patch(){
      const [major, minor, patch] = this.arg.at(-1)
      this.arg.push([major, minor, patch + 1])
      return this
    }
  
    rollback(){
      if(this.arg.length <= 1){
        throw new Error('Cannot rollback!');
      }
        this.arg.pop()
        return this
    }
  
    release(){
      return this.arg.at(-1).join('.')
    }
  }

//  const vm = new VersionManager("2.0.3");

// console.log(
//   vm
//     .major()     // "3.0.0"
//     .minor()     // "3.1.0"
//     .minor()     // "3.2.0"
//     .minor()     // "3.3.0"
//     .patch()     // "3.3.1"
//     .release()
// );


const vm = new VersionManager("1.2.3");

console.log(
  vm
    .minor()     // "1.3.0"
    .major()     // "2.0.0"
    .patch()     // "2.0.1"
    .rollback()  // "2.0.0"
    .rollback()  // "1.3.0"
    .release()
);
