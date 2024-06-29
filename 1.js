// function polling(fetcher, isCompleted, delay) {
//   return new Promise((resolve) =>{
//     const result = setInterval(() => fetcher().then(value =>{
//       if(isCompleted(value) === true){
//         clearInterval(result)
//         resolve(value)
//       }
//     }, () =>  result), delay)
//   })
// }

// async function polling(fetcher, isCompleted, delay) {
//   while (true) {
//     try {
//       const fetchResult = await fetcher()
//       if (isCompleted(fetchResult)) {
//         return fetchResult
//       }
//     } catch {
//     }
//     await new Promise(resolve => setTimeout(resolve, delay))
//   }
// }

function polling(fetcher, isCompleted, delay){
  return fetcher().then(value => {
    if(isCompleted(value) === true){
      return value
      }
      throw new Error
      // throw new Error()
      // throw Error()
      
      // throw Error
  }).catch(() => sleep(delay).then(() => polling(fetcher, isCompleted, delay)))
}
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

///////-------------------------------------------------
const testingResponse = { status: "testing" };
const timeLimitResponse = { status: "timeLimit" };
let i = 0;

const fakeFetcher = async () => {
  return i++ < 3 ? testingResponse : timeLimitResponse;
}

const result = polling(
  fakeFetcher,
  (response) => response.status !== "testing",
  500,
);

result.then(data => console.log(data));
// через 1.5 секунды получим объект со статусом "timeLimit"
