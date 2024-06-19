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

async function polling(fetcher, isCompleted, delay){
  let condition = true
  while(condition){
    try{
      let fetchResult = await fetcher()
      if(isCompleted(fetchResult) === true){
        condition = false
        return fetchResult
      }
    }  catch{
        (error) => {
          if(isCompleted(error) === true){
          condition = false
          return error
          }
        }
      }
    await new Promise(resolve => setTimeout(resolve, delay))
  }
}

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
