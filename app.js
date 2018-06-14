const CheckPhonesUI = require('./ui/CheckPhonesUI.js');

const args = process.argv
if(args[2]){
    new CheckPhonesUI(args[2]).check();
}else{
  console.log("No file name passed as argument")
}
