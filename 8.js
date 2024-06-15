function sleep(ms) {
  return (value) => new Promise(resolve => setTimeout(() => resolve(value), ms))
}