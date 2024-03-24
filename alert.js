function group(arr, isEqual) {
  let cache = []
  for (let i = 0; i < arr.length; i++){
    for (let j = i; j < arr.length; j++){
       if (isEqual(arr[i], arr[j])){
          cache.push(arr[j])
       }
      
    }
  }
  console.log(cache)
  let res = []
  let memory = []
  for (let i = 0; i < arr.length; i++){
    if((i < arr.length - 1) && isEqual(cache[i], cache[i+1])) {
      memory.push(arr.find(item => (isEqual(item, cache[i + 1]))))
    }
    if((i < arr.length - 1) && !isEqual(cache[i], cache[i+1])){
      res.push(memory)
      memory = []
    }
  }
  console.log(res)
}





const words = [
    "the", "quick", "brown", "fox",
    "jumps", "over", "the", "lazy", "dog"
  ];
  
  const result = group(words, (a, b) => a.length === b.length);
  
  const expectedResult = [
    ["the", "fox", "the", "dog"],
    ["quick", "brown", "jumps"],
    ["over", "lazy"],
  ]

  // const arr = [
  //   { x: 1, y: 2 },
  //   { x: 4, y: 5 },
  //   { x: 1, y: 3 },
  //   { x: 4, y: 2 },
  //   { x: 7, y: 3 },
  // ];
  
  // console.log(group(arr, (a, b) => a.x === b.x));
  
  // const expectedResult1 = [
  //   [{ x: 1, y: 2 }, { x: 1, y: 3 }],
  //   [{ x: 4, y: 5 }, { x: 4, y: 2 }],
  //   [{ x: 7, y: 3 }],
  // ]
  
  // console.log(group(arr, (a, b) => a.y === b.y));
  

  // const expectedResult2 = [
  //   [{ x: 1, y: 2 }, { x: 4, y: 2 }],
  //   [{ x: 4, y: 5 }],
  //   [{ x: 1, y: 3 }, { x: 7, y: 3 }],
  // ]