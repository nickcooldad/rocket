function groupBy(array, classifier, downstream, accumulatorSupplier) {
  const cache = new Map();
  [...array].forEach((item,index) => {
    if(!cache.has(classifier(item, index))){
      cache.set(classifier(item, index), accumulatorSupplier())
    } 
      cache.set(classifier(item, index), downstream(cache.get(classifier(item, index)), item))
  })
  return cache
}



// array — массив, элементы которого мы группируем;
// classifier — функция, определяющая по элементу, к какой группе он относится;
// downstream — функция объединяющая значение по ключу и очередной элемент (функция похожа на колбэк метода reduce);
// accumulatorSupplier — функция, возвращающая начальное значение по ключу.

//В примере для одного и того же массива объекта мы вызываем функцию с разными аргументами.

const employees = [
  { name: "James", income: 1000, profession: "developer", age: 23, },
  { name: "Robert", income: 1100, profession: "qa", age: 34, },
  { name: "John", income: 1200, profession: "designer", age: 32, },
  { name: "Mary", income: 1300, profession: "designer", age: 22, },
  { name: "Patricia", income: 1400, profession: "qa", age: 23, },
  { name: "Jennifer", income: 1500, profession: "developer", age: 45, },
  { name: "Max", income: 1600, profession: "developer", age: 27, },
];
//В первом случае мы считаем сумму зарплат всех сотрудников одной профессии. Начальное значение — число 0, а функция downstream складывает текущую сумму с зарплатой очередного сотрудника.


const profession2totalIncome = groupBy(
  employees,
  employee => employee.profession, // group by profession
  (acc, employee) => acc + employee.income, // sum up incomes
  () => 0, // provide an initial value for map's value
);

// Map { 'developer' => 4100, 'qa' => 2500, 'designer' => 2500 }
//Во втором случае мы собираем имена сотрудников одной профессии. Начальное значение — пустой массив, а функция downstream добавляет в массив имя очередного сотрудника.


const profession2names = groupBy(
  employees,
  employee => employee.profession,
  (acc, employee) => [...acc, employee.name],
  () => [],
);

// Map {
//   'developer' => [ 'James', 'Jennifer', 'Max' ],
//   'qa' => [ 'Robert', 'Patricia' ],
//   'designer' => [ 'John', 'Mary' ],
// }