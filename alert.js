class QueryParams {
  memory = {}

  append(key, value){
    //console.log(key,value)
    if(this.memory.hasOwnProperty(key)){
      this.memory[key].push(value)
    } else{
    this.memory[key] = [value]}
  }
  toString(){
    console.log(this.memory)
    let str = []
    for(let key in this.memory){
      str.push(`${key}=${this.memory[key]}`)
    }
    return str.join("&")
  }
  get(key){
    console.log('+')
    if(this.memory.hasOwnProperty(key)){
      return this.memory[key][0]
    }
  }
  getAll(key){
    if(this.memory.hasOwnProperty(key)){
      return this.memory[key]
    }
  }
  set(key, value){
    if(this.memory.hasOwnProperty(key)){
      delete this.memory.key
    }
    this.memory[key] = value
  }
  delete(key){
    if(this.memory.hasOwnProperty(key)){
      delete this.memory.key
    }
  }
}


const u = new QueryParams();

u.append("genre", "comedy");
u.append("year", "2023");

console.log(u.toString());
// "genre=comedy&year=2023"

const u1 = new QueryParams("genre=comedy&year=2023");
console.log(u1.get("genre")); // "comedy"

const u2 = new QueryParams({ genre: "comedy", year: "2023" });
console.log(u2.get("year")); // "2023"

const u3 = new QueryParams("genre=comedy&year=2023");
u3.append("year", "2024");
u3.append("year", "2025");

console.log(u3.toString());
// "genre=comedy&year=2023&year=2024&year=2025"

u3.set("year", "1999");

console.log(u3.toString());
// "genre=comedy&year=1999"

const u4 = new QueryParams("genre=comedy&year=2023");
u4.delete("year");

console.log(u4.toString()); // "genre=comedy"

const u5 = new QueryParams(
  "genre=comedy&year=2023&year=2024&year=2025"
);

console.log(u5.get("genre")); // "comedy"
console.log(u5.get("year")); // "2023"
console.log(u5.getAll("genre")); // ["comedy"]
console.log(u5.getAll("year")); // ["2023", "2024", "2025"]

const u6 = new QueryParams(
  "genre=comedy&year=2023&year=2024&year=2025"
);

console.log(u6.has("year")); // true
console.log(u6.has("year", "2023")); // true
console.log(u6.has("year", "1999")); // false
