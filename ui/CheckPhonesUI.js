"use strict";
const CheckPhonesController = require('../controller/CheckPhonesController')
class CheckPhonesUI {
  constructor(fileName){
    this.fileName = fileName
  }
  checkPhones () {
    console.log("Checking Phones " + this.fileName)
    var controller = new CheckPhonesController(this.fileName)
    controller.loadAreaCodes();
    controller.checkPhones();
  }

}

module.exports = CheckPhonesUI
