function permutations(str) {
  if (str.length === 1) {
    return [str];
  }
  const results = [];

  for (let i = 0; i < str.length; i++) {
    const remainingChars = str.slice(0, i) + str.slice(i + 1);

    const perms = permutations(remainingChars);

    for (let j = 0; j < perms.length; j++) {
      results.push(str[i] + perms[j]);
    }
  }
  return results;
}
function permutations(s) {
  if (s.length === 0) {
    return [""];
  }

  return s
    .split("")
    .flatMap((_, i) => permutations(s.slice(0, i) + s.slice(i + 1)).map(x => x + s[i]))

  // const results = [];

  // for (let i = 0; i < str.length; i++) {
  //   const remainingChars = str.slice(0, i) + str.slice(i + 1);

  //   const perms = permutations(remainingChars);

  //   for (let j = 0; j < perms.length; j++) {
  //     results.push(str[i] + perms[j]);
  //   }
  // }
  // return results;
}





// O(n!)
console.log(permutations("0123456789A").length);
// 11! = 39916800
// 11! × 11 = 439_084_800 byte ≈ 440 MB

// console.log(permutations("ABC"));
// // ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
