function memo(fn) {
    const cache = new Map()
    return (arg) => {
      if (!cache.has(arg)){
        cache.set(arg, fn(arg))
      }
      return cache.get(arg)
    }
  }