"use strict";
const CheckPhonesController = require('../controller/CheckPhonesController')
class CheckPhonesUI {

  constructor(fileName) {
    this.fileName = fileName
    this.controller = new CheckPhonesController(this.fileName)

  }

  check() {
    var _this = this
    this.controller.loadAreaCodes().then(function() {
        _this.checkPhones();
      },
      function(err) {
        console.log("Error loading area codes")
      })
  }

  checkPhones() {
    this.controller.checkPhones().then(function(result) {
        if (result.length > 0) {
          console.log("------------------------")
          result.forEach(function(checkedPhone) {
            console.log(checkedPhone)
          })
          console.log("------------------------")
        } else {
          console.log("No results found for that file")
        }
      },
      function(err) {
        console.log("Error Reading Phone Numbers: " + err)
      });
  }

}

module.exports = CheckPhonesUI
