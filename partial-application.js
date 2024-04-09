function partial(fn, ...arg) {
    return fn.bind(null, ...arg);
  }
  
  
  
  
  
  function plate(letterA, digit1, digit2, digit3, letterB, letterC, code) {
      const number = digit1 + digit2 + digit3;
      return `${letterA} (${number}) ${letterB + letterC} [${code}]`;
    }
    
    console.log(plate("A", "1", "2", "3", "B", "C", "78"));
    // вернет "A (123) BC [78]"
  //   Функция partial позволяет зафиксировать часть аргументов функции.
  //   Она принимает функцию и произвольное количество аргументов, которые мы указываем заранее. А возвращает новую функцию, которая принимает недостающие аргументы и возвращает результат.
    
    const foo = partial(plate, "A", "7", "7", "7");
    
    console.log(foo("M", "P", "47")); // "A (777) MP [47]"
    console.log(foo("A", "A", "95")); // "A (777) AA [95]"
  //   Функция partial должна поддерживать плейсхолдеры.
    const _ = partial.placeholder;
    const letters = partial(plate, _, "7", "7", "7", _, _, "78");
    
    console.log(letters("C", "A", "P")); // "C (777) AP [78]"
    console.log(letters("X", "X", "X")); // "X (777) XX [78]"
    
    const digits = partial(plate, "M", _, _, _, "A", "X", _);
    
    console.log(digits("3", "6", "9", "78")); // "M (369) AX [78]"
    console.log(digits("0", "0", "0", "47")); // "M (000) AX [47]"