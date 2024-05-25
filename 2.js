class BrowserHistory {
  constructor(url) {
    this.history = [url];
    this.currentIndex = 0
  }
  
  visit(url) {
    // this.history = this.history.slice(0, this.currentIndex + 1)
    this.history.length = this.currentIndex + 1;
    this.history.push(url);
    this.currentIndex++
    return url;
  }
  
  back() {
  	if (this.currentIndex === 0) {
    	return null;
    }
    this.currentIndex--;
    return this.history[this.currentIndex];
  }
  
  forward() {
    if (this.currentIndex === this.history.length - 1) {
			return null
    }
		this.currentIndex++;
		return this.history[this.currentIndex];
  }
}