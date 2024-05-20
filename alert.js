class BrowserHistory {
  constructor(url) {
    this.history = [url];
    this.currentIndex = 0
  }

  visit(url) {
    this.history = this.history.slice(0, this.currentIndex + 1)
    this.history.push(url);
    this.currentIndex++
    return url;
  }

  back() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    }
    return null;
  }

  forward() {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
    return null;
  }
}

const history = new BrowserHistory("urlA");

console.log(history.visit("urlB")); // "urlB"
history.visit("urlC");
history.visit("urlD");

console.log(history.back()); // "urlC"
console.log(history.back()); // "urlB"
console.log(history.forward()); // "urlC"

history.visit("urlX");
history.visit("urlY");

console.log(history.back()); // "urlX"
console.log(history.back()); // "urlC"
console.log(history.back()); // "urlB"
console.log(history.back()); // "urlA"
console.log(history.back()); // null
