class TimeLimitedCache {
  #cache = new Map()
  #timeout = new Map()

  set(key, value, duration) {
    const timerId = setTimeout(() => {
      this.#cache.delete(key)
      this.#timeout.delete(key)
    }, duration)

    clearTimeout(this.#timeout.get(key))

    if(this.#cache.has(key)){
      this.#cache.set(key, value)
      this.#timeout.set(key, timerId)
      return true
    }

    this.#cache.set(key, value)
    this.#timeout.set(key, timerId)

    return false
  }

  get(key) {
    return this.#cache.get(key) ?? -1
  }

  count() {
    return this.#cache.size
  }
}

const cache = new TimeLimitedCache();

setTimeout(() => console.log(cache.set(1, 500, 450)),   0);   // false
setTimeout(() => console.log(cache.get(1)),           100);   // 500
setTimeout(() => console.log(cache.set(2, 600, 350)), 200);   // false
setTimeout(() => console.log(cache.get(2)),           300);   // 600
setTimeout(() => console.log(cache.count()),          400);   // 2
setTimeout(() => console.log(cache.set(2, 800, 250)), 500);   // true
setTimeout(() => console.log(cache.count()),          600);   // 1
setTimeout(() => console.log(cache.get(2)),           700);   // 800
