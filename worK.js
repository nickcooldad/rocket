const search = (a, b) => {
  if(String(a) > String(b)) {
    return 1
  }
  if(String(a) < String(b)){
    return -1
  } else { 
    return 0
  }
}

function sort(arr, compareFn = search){
    for (let i = 0; i < arr.length; i++){
      for (let j = i; j < arr.length; j++){
           let cache = arr[i]
           if(compareFn(arr[i], arr[j]) > 0){
             arr[i] = arr[j]
             arr[j] = cache
            }
     }
    }
}





//   const a = ["abbbbb", "aaa", "aaaaaaaaaaaaa"]
//   sort(a)
//   console.log(a)
//   console.log(["abbbbb", "aaa", "aaaaaaaaaaaaa"].sort())


 // Сортировка строк без compareFn
// const arr = ["zer", "abc", "a", "xxyyzz", "bz"];

// sort(arr);
// console.log(arr); // ["a", "abc", "bz", "xxyyzz", "zer"]
//Сортировка чисел без compareFn

const arr = [12, 5, 1, 3, 23];
sort(arr);

console.log(arr); // [1, 12, 23, 3, 5]
//Сортировка строк по длине

// const arr = ["zerp", "abc", "a", "xxyyzz", "bz"];
// sort(arr, (a, b) => b.length - a.length);

// console.log(arr); // ["xxyyzz", "zerp", "abc", "bz", "a"]