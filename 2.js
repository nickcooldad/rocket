function sum(p1, p2) {
  return p1.then(p1 => p2.then(p2 => p1 + p2))
}


const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));

sum(p1, p2).then(result => {
  console.log(result); // 1 + 2 === 3
})
