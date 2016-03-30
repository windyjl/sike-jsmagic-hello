#!/usr/bin/env node
var parseArgv = require('minimist');
var args = parseArgv(process.argv);
if(args.zishu){
  console.log("I'm not change yet");
}else {
  console.log("caonima,",args._[2]);
}
