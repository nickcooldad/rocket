class Router {
  constructor() {
    this.cache = []
  }
  bind(link, method, action) {
    this.cache.push([link, method].join(), action)
  }
  runRequest(link, method) {
    let features = [link, method].join()
    if (this.cache.includes(features)) {
      return this.cache[this.cache.indexOf(features) + 1]()
    } else {
      return 'Error 404: Not Found'
    }
  }
}
//'Error 404: Not Found'
let router = new Router()
router.bind('/page', 'GET', function () {
  return 'First binding.'
})
router.runRequest('/login', 'GET'), 'Please log-in.'
let a = [
  ['/hello', '/hello'],
  ['GET', 'GET'],
  [[Function], [Function]],
  ['/login', '/login'],
  ['GET', 'GET'],
  [[Function], [Function]],
]
console.log(Object.fromEntries(a))
class Router {
  constructor() {
    this.cache = []
  }
  bind(link, method, action) {
    this.cache.push([link, method].join(), action)
  }
  runRequest(link, method) {
    let features = [link, method].join()
    return this.cache.includes(features)
      ? this.cache[this.cache.lastIndexOf(features) + 1]()
      : 'Error 404: Not Found'
  }
}

class Router {
  constructor() {
    this.routes = new Map()
  }

  bind(url, method, action) {
    this.routes.set(url + ':' + method, action)
  }

  runRequest(url, method) {
    if (!this.routes.has(url + ':' + method)) {
      return 'Error 404: Not Found'
    }
    return this.routes.get(url + ':' + method)()
  }
}
