function throttle(fn, ms) {
let start = 0
let timer
  return (...args) => {
  let finish = Date.now()
  if(finish - start >= ms){
    start = finish
    fn(...args)
  } else {
    clearTimeout(timer)
    timer = setTimeout(() => {
      start = Date.now()
      fn(...args)
     }, ms - (finish - start))
    }
  }
}

function fn(...args) {
  console.log({
    args,
    time: Date.now() - start,
  });
}

const throttledFn = throttle(fn, 400);
let start = Date.now();

setTimeout(() => throttledFn(1, "blue"),     0);  //    0
setTimeout(() => throttledFn(2, "pink"),   100);  // 
setTimeout(() => throttledFn(3, "green"),  200);  //  400 
setTimeout(() => throttledFn(4, "pink"),   700);  //  800
setTimeout(() => throttledFn(5, "pink"),  1000);  // 1200
setTimeout(() => throttledFn(6, "green"), 1900);  // 1900
setTimeout(() => throttledFn(7, "pink"),  2000);  //
setTimeout(() => throttledFn(8, "blue"),  2100);  //
setTimeout(() => throttledFn(9, "green"), 2200);  // 2300
