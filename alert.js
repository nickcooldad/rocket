function timeLimit(fn, ms) {
  return (...value) => new Promise((resolve, reject) => {
    setTimeout(() => reject("Time Limit Exceeded"), ms)
    Promise.race([fn(...value)]).then(value => resolve(value), reason => reject(reason))
  })
}

// Декоратор Time Limit
// Нужно написать декоратор timeLimit, который принимает асинхронную функцию fn и время ms (в миллисекундах).

// Декоратор возвращает новую функцию, которая работает как исходная, но реджектится по таймауту.

// Если за время ms исходная функция не вернула ответ, то через время ms промис реджектится со строкой "Time Limit Exceeded".

// Если исходная функция успела завершиться раньше (успешно или неуспешно), то и новая функция завершается так же в тот же момент.
const fn = name => new Promise(resolve => {
  setTimeout(() => resolve(`Hello, ${name}!`), 500);
});

const fn250 = timeLimit(fn, 250);

console.time("xxx");

fn250("World").then(
  value => {
    console.timeEnd("xxx");
    console.log("1 >>", value);
  }, 
  reason => {
    console.timeEnd("xxx");
    console.log("2 >>", reason); // "Time Limit Exceeded"
  },
);
