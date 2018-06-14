"use strict"

class AreaCode {

  constructor(code) {
    this.code = code
    this.count = 0
  }

  increaseCount() {
    this.count++;
  }
  
}

module.exports = AreaCode
