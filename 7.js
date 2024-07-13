async function sum(a, b) {
  if (Math.random() < .5) {
    return a + b; // success
  }
  throw "error"; // bad luck
}

function callbackify(fn) {
  return (...arg) => {
    const cb = arg.at(-1)
    const args = arg.slice(0, -1)
    fn(...args).then(
      value => cb(null, value),
      error => cb(error),
    )
  }
}

const callbackifiedSum = callbackify(sum);

callbackifiedSum(2, 5, (err, result) => {
  if (err === null) {
    console.log(result); // 7
  }
});

