function join(...str) {
  return function (arg) {
    if(arg !== undefined) {
     return join(...str, arg)
    } else {
     return str.join(' ')
    }
  }
}
const s = join("Hello")("World!")("how")("are")("you?")();
console.log(s); // "Hello World! how are you?