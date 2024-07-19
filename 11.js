
function debounce(fn, ms) {
  let timeId
  return (...args) => {
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      fn(...args)
    }, ms)
  }
}

function fn(...args) {
    console.log({
      args,
      time: Date.now() - start,
    });
  }
  
  const debouncedFn = debounce(fn, 400);
  let start = Date.now();
  
  setTimeout(() => debouncedFn(1, "blue"),     0);
  setTimeout(() => debouncedFn(2, "green"),  100);  //  500
  setTimeout(() => debouncedFn(3, "pink"),   700);
  setTimeout(() => debouncedFn(4, "pink"),  1000);
  setTimeout(() => debouncedFn(5, "pink"),  1300);  //  1700
  setTimeout(() => debouncedFn(6, "blue"),  1800);
  setTimeout(() => debouncedFn(7, "green"), 1900);
  setTimeout(() => debouncedFn(8, "blue"),  2100);  // 2500
  