const defoltCompare = (array) => {
    if(array.every(item => typeof item[0] === 'string')){
     return array.toSorted()
    } else {
     return array.toSorted((a, b) => a[0] - b[0])
    }
   }
  
  function frequency(arr, options = defoltCompare) {
    const cache = new Map
  
    const defoltFrequency = (arr) => {
      return arr.toSorted((a, b) => options.compareTo(a[0], b[0], a[1], b[1]))
     }
  
    if(options.criteria !== undefined){
      arr.forEach((item, index) => {
        if(!cache.has(options.criteria(item, index))){
          cache.set(options.criteria(item, index), 0)
        }
        cache.set(options.criteria(item, index), cache.get(options.criteria(item)) +1)
      })
      if(options.compareTo !== undefined){
        return defoltFrequency([...cache])
      }
      return defoltCompare([...cache])
    }
  
    arr.forEach((item) => {
      if(!cache.has(item)){
        cache.set(item, 0)
      }
      cache.set(item, cache.get(item) + 1)
       
    })
  
    if(options.compareTo !== undefined){
      return defoltFrequency([...cache])
    }
    return defoltCompare([...cache])
    }
  
    function parity(number) {
        return number % 2 === 0 ? 'even' : 'odd';
      }
      
      console.log(frequency(
        [1, 2, 3, 4, 5, 6, 7],
        { criteria: parity },
      ));
      // [["even", 3], ["odd", 4]]
      function alphabeticalCompare(value1, value2) {
        return String(value1).localeCompare(String(value2))
      }
      
      console.log(frequency(
          [1, 10, 12, 2, 1, 10, 2, 2],
          { compareTo: alphabeticalCompare },
      ));
      // [[1, 2], [10, 2], [12, 1], [2, 3]]
      function frequencyCompare(value1, value2, freq1, freq2) {
        return freq2 - freq1;
      }
      
      console.log(frequency(
        ['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'],
        { compareTo: frequencyCompare },
      ));
      // [["Peter", 3], ["Anna", 2], ["Rose", 1]]
      function profession(person) {
        return person.profession;
      }
      
      var persons = [
        {name: 'Peter', profession: 'teacher'},
        {name: 'Max', profession: 'scientific'},
        {name: 'Anna', profession: 'scientific'},
        {name: 'Rose', profession: 'scientific'},
        {name: 'Michael', profession: 'teacher'},
        {name: 'Javier', profession: 'politician'},
      ];
      
      console.log(frequency(
        persons,
        {
          criteria: profession,
          compareTo: frequencyCompare,
        }
      ));
      //[["scientific", 3], ["teacher", 2], ["politician", 1]]