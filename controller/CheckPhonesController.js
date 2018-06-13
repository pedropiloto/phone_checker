"use strict";
const config = require("config");
const reader = require ("buffered-reader");
const DataReader = reader.DataReader

const PhoneNumber = require("../model/PhoneNumber")


class CheckPhonesController {
  constructor(fileName){
    this.fileName = fileName
    this.areaCodes = [];
    this.phoneNumbers = [];
  }

  loadAreaCodes(){
    var _this = this;
    new DataReader(config.get("AreaCodes.fileName"),{encoding:"utf-8"})
    .on("error", function(error){
      throw error
    })
    .on("line", function(line){
      _this.areaCodes.push(line)
    })
    .read();
  }

  checkPhones () {
    var _this = this;
    new DataReader(this.fileName,{encoding:"utf-8"})
    .on("error", function(error){
      throw error
    })
    .on("line", function(line){
      _this.phoneNumbers.push(new PhoneNumber(line))
    }).
    on("end", function(){
      var checkedPhones = _this.phoneNumbers.filter(phoneNumber=>phoneNumber.number.length <= 6)
      checkedPhones.forEach(function(value){
        console.log("value: " + value.number)
      })
    })
    .read();

  }

}

module.exports = CheckPhonesController
