function objectCreate(prototype) {
    if (typeof prototype !== 'object') {
      throw new TypeError('Object prototype may only be an Object or null');
    }
    let obj = {};
    // Object.setPrototypeOf(obj, prototype);
    obj.__proto__ = prototype;
    return obj;
  }