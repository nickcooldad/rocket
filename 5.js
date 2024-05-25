function objectAssign(target, ...sources) {
  sources.forEach(source => {
    let properties = {}
    Object.keys(source).forEach(element => {
      properties[element] = Object.getOwnPropertyDescriptor(source, element)
    });
    Object.defineProperties(target, properties)
  })
}