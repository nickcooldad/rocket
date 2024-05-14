class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class HttpRouter {
  memory = new Map()

  addHandler(api, get, funct){
    this.memory.set(`${api},${get}`, funct)
  }

  runRequest(api, get){
    if(this.memory.has(`${api},${get}`)){
      return this.memory.get(`${api},${get}`)()
    } else{
      return "Error 404: Not Found"
    }
  }
}




const router = new HttpRouter();

router.addHandler("/api/users", "GET", () => {
  return ["user1", "user2"];
});

router.addHandler("/api/users", "POST", () => {
  return "User added";
});

router.addHandler("/api/login", "POST", () => {
  return "OK";
});


console.log(router.runRequest("/api/users", "GET"));
// ["user1", "user2"]

console.log(router.runRequest("/api/login", "POST"));
// "OK"


console.log(router.runRequest("/api/login", "PUT"));
// "Error 404: Not Found"

console.log(router.runRequest("/api/send", "POST"));
// "Error 404: Not Found"
