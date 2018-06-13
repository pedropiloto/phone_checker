const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const CheckPhonesUI = require('./ui/CheckPhonesUI.js');

const fileOptions = {
  describe: 'File Name',
  demand: true,
  alias: 'f'
};
const argv = yargs
  .command('checkphones', 'check phones', {
    file: fileOptions,
  })
  .help()
  .argv;
var command = argv._[0];

switch(command) {
  case "checkphones":
    new CheckPhonesUI(argv.file).checkPhones();
    break;
  default:
  console.log("command not supported yet");
  break;
}
