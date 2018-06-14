"use strict"

class PhoneNumber{
  constructor(number){
    this.number = number
  }
  
  validate(){
    //Escape '+' special regex character
    var temp = this.number.replace('p','a').replace('+','p')
    //Regex expression for validations
    var regex = /\b([0][ ]*[0]|p)?((([0-9][ ]*){7,12})|(([0-9][ ]*){3}))\b/g
    return regex.test(temp)
  }

  belongsToAreaCode(code){
    var temp = (this.number.startsWith("00"))?this.number.substring(2) : (this.number.startsWith("+")) ? this.number.substring(1) : this.number
    return temp.startsWith(code)
  }

module.exports = PhoneNumber
