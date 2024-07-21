// function findAllJavascriptFiles(folder, callback,) {
//   let countFile = 0
//   let result = []
//   folder.size((limit) => {
//     for(let i = 0; i < limit; i++){
//       folder.read(i, (file) => {
//         if(typeof file === 'object'){
//          let innerFunct =  findAllJavascriptFiles(file, callback, result)
//          Object.assign(result, innerFunct)
//         }
//         if(typeof file === 'string' && file.endsWith('.js')){
//           result.push(file)
//         }
//         if(countFile === limit){
//           callback(result)
//         }
//       })
//     }   
//   })
// }

// function findAllJavascriptFiles(folder, callback) {
//   if (typeof folder === 'string') {
//     if (folder.endsWith('.js')) {
//       callback([folder])
//     } else {
//       callback([])
//     }
//     return
//   }

//   folder.size((limit) => {
//     if (limit === 0) {
//       callback([])
//     }
//     let cache = []
//     let countFile = 0
//     for (let i = 0; i < limit; i++) {
//       folder.read(i, (file) => {
//         findAllJavascriptFiles(file, (result) => {
//           cache.push(...result)
//           countFile++
//           if (countFile === limit) {
//             callback(cache)
//           }
//         })
//       })
//     }
//   })
// }



async function findAllJavascriptFilesPromise(folder) {
  if (typeof folder === 'string') {
    if (folder.endsWith('.js')) {
      return [folder]
    }
    return []
  }
  
  const read = promisify(folder.read);
  const size = promisify(folder.size);

  const promises = []
  const limit = await size();

  for (let i = 0; i < limit; i++) {
    promises.push(read(i).then(findAllJavascriptFilesPromise));
  }

  const result = await Promise.all(promises);
  return result.flat();
}

function promisify(fn) {
  return (...args) => {
    return new Promise((resolve) => {
      fn(...args, resolve);
    });
  };
}


function findAllJavascriptFiles(folder, callback) {
  findAllJavascriptFilesPromise(folder).then(arr => callback(arr));
}



function Folder(files) {
  const rand = () => Math.random() * 500;

  return {
    read: (index, cb) => void setTimeout(cb, rand(), files[index]),
    size: (cb) => void setTimeout(cb, rand(), files.length),
  };
}

const root = Folder([
  "1.js",
  "qwerty.txt",
  "2.js",
  Folder([
    Folder([
      Folder([]),
      "3.txt",
    ]),
    "4.js",
  ]),
  "8.html",
  Folder([
    "5.png",
    "6.js",
    Folder([
      "7.txt",
    ]),
  ]),
]);
// const root = Folder([
//   "1.js",
//   "2.js",
//   "3.txt",
//   "4.js",
//   "8.html"
// ]);


findAllJavascriptFiles(root, arr => {
  console.log(arr); // arr === ["1.js", "2.js", "4.js", "6.js"]
})


