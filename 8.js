class ObservableSet extends Set {
    constructor(cb, iterable){
      super(iterable)
      this.cb = cb
    }
  
    add(arg){
      super.add(arg)
      this.cb?.('add', [arg]);
      return this
    }
  
    delete(arg){
      const result = super.delete(arg)
      this.cb('delete', [arg])
    return result
    }
  
    clear(){
      super.clear()
      this.cb('clear', [])
    return this
    }
  }

  const s = new ObservableSet();

  s.forEach(x => {
    console.log(x);
  })

  console.log(s.size);

//Мутирующие: add, clear и delete
//Немутирующие: difference, entries, forEach, has, intersection, isDisjointFrom, isSubsetOf, isSupersetOf, keys, symmetricDifference, union, values
//Геттер: size
//@@iterator, позволяющий использовать spread-синтаксис и цикл for..of
const set = new ObservableSet(
  (action, args) => console.log({ action, args }),
  [1, 2, 3]
);

// set.add(12);     // action === "add", args === [12]
// set.has(12);
// set.size();
// set.delete(12);  // action === "delete", args === [12]
// set.clear();     // action === "clear", args === []
