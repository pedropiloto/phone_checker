const chai = require("chai");
const expect = chai.expect;
const PhoneNumber = require("../model/PhoneNumber")
describe("validate phone number", function() {
  it("validate with '+' and 12 numbers", function() {
    expect(new PhoneNumber("+351960000000").validate()).to.be.true
  });
  it("validate with '00' and 12 numbers", function() {
    expect(new PhoneNumber("00351960000000").validate()).to.be.true
  });
  it("validate with '+' and 3 numbers", function() {
    expect(new PhoneNumber("+999").validate()).to.be.true
  });
  it("validate with '00' and 3 numbers", function() {
    expect(new PhoneNumber("00999").validate()).to.be.true
  });
  it("validate with 12 numbers", function() {
    expect(new PhoneNumber("351960000000").validate()).to.be.true
  });
  it("validate with 3 numbers", function() {
    expect(new PhoneNumber("999").validate()).to.be.true
  });
  it("validate with 20 numbers", function() {
    expect(new PhoneNumber("35196000000000000000").validate()).to.be.false
  });
  it("validate no '00' and '+'", function() {
    expect(new PhoneNumber("+00112").validate()).to.be.false
  });
  it("validate no letters", function() {
    expect(new PhoneNumber("p351960000000p").validate()).to.be.false
  });
  it("validate no symbols", function() {
    expect(new PhoneNumber("-351960000000+").validate()).to.be.false
  });
  it("validate no white space between '+' and first digit", function() {
    expect(new PhoneNumber("+ 351960000000p").validate()).to.be.false
  });
  it("validate white spaces", function() {
    expect(new PhoneNumber("+3519600000  0  0").validate()).to.be.true
  });
});

describe("phone number belongs to area code", function() {
  it("with ''+' and 3 numbers", function() {
    expect(new PhoneNumber("+351960000000").belongsToAreaCode('351')).to.be.true
  });
  it("with '00' and 3 numbers", function() {
    expect(new PhoneNumber("00351").belongsToAreaCode('351')).to.be.true
  });
  it("with 3 numbers", function() {
    expect(new PhoneNumber("351").belongsToAreaCode('351')).to.be.true
  });
  it("with '+' and 12 numbers", function() {
    expect(new PhoneNumber("+351960000000").validate()).to.be.true
  });
  it("with '00' and 12 numbers", function() {
    expect(new PhoneNumber("00351960000000").validate()).to.be.true
  });
  it("with 12 numbers", function() {
    expect(new PhoneNumber("351960000000").validate()).to.be.true
  });
});
