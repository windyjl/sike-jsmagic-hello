import parseArgv from "minimist";
import {greet} from "./index";

const args = parseArgv(process.argv);
export function main(){
	console.log(greet(args._[2],args.zishu));
}
