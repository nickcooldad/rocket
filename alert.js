class AA {
  #array;

  constructor(...array) {
    this.#array = array;
  }

  read() {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.#array), 100);
    });
  }
}


const example = new AA(
  new AA(1, new AA(new AA(2)), new AA(3)),
  new AA(4, new AA(5, 6), 7),
  8,
  new AA(9, new AA(10, new AA(11, 12), 13)),
)

async function flatten(value) {
  const result = [];

  for (const element of await value.read()) {
    if (element instanceof AA) {
      result.push(...await flatten(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

console.time("aa")
flatten(example).then((result) => {
  console.log(result); // [1,2,3,4,5,6,7,8,9,10,11,12,13]
  console.timeEnd("aa"); // ≈ 1000 ms
});

