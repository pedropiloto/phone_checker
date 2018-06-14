"use strict";
const config = require("config");
const reader = require("buffered-reader");
const DataReader = reader.DataReader

const PhoneNumber = require("../model/PhoneNumber")
const AreaCode = require("../model/AreaCode")

class CheckPhonesController {

  constructor(fileName) {
    this.fileName = fileName
    this.areaCodes = [];
    this.phoneNumbers = [];
  }

  loadAreaCodes() {
    var _this = this;
    return new Promise(function(resolve, reject) {
      new DataReader(config.get("AreaCodes.fileName"), {
          encoding: "utf-8"
        })
        .on("error", function(error) {
          reject();
        })
        .on("line", function(line) {
          _this.areaCodes.push(new AreaCode(line))
        })
        .on("end", function() {
          resolve();
        })
        .read();
    });
  }

  checkPhones() {
    var _this = this;
    return new Promise(function(resolve, reject) {
      new DataReader(_this.fileName, {
          encoding: "utf-8"
        })
        .on("error", function(error) {
          reject(error)
        })
        .on("line", function(line) {
          _this.phoneNumbers.push(new PhoneNumber(line))
        }).
      on("end", function() {
          var checkedPhones = _this.phoneNumbers.filter(phoneNumber => phoneNumber.validate())
          _this.areaCodes.forEach(function(areaCode) {
            checkedPhones.forEach(function(phone) {
              if (phone.belongsToAreaCode(areaCode.code))
                areaCode.increaseCount();
            })
          })
          var p = _this.areaCodes.filter(areaCode => areaCode.count > 0).map(areaCode => areaCode.code + ": " + areaCode.count)
          resolve(p);
        })
        .read();
    })
  }

}

module.exports = CheckPhonesController
