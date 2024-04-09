function join(...str) {
    return (innerStr) => {
      if(innerStr !== undefined) {
       return join(...str, innerStr)
      } else {
       return str.join(' ')
      }
    }
  }