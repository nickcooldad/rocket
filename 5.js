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
  

  // const promisFlat = arg =>{
  //   return arg.reduce((acc, item) => {
  //       if(Array.isArray(item)){
  //          acc.push(...promisFlat(item))
  //       } else{
  //           acc.push(item)
  //       }
  //       return acc
  //   }, [])
  // }
  
  async function flatten(value) {
    let promises = (await value.read()).map(async (item) => {
        if(item instanceof AA){
            return flatten(item)
        }
        return item
    })

    // return promisFlat(await Promise.all(promises))
    return Promise.all(promises).then(x => x.flat());
  }
  
  console.time("aa")
  flatten(example).then((result) => {
    console.log(result); // [1,2,3,4,5,6,7,8,9,10,11,12,13]
    console.timeEnd("aa"); // ≈ 1000 ms
  });
  