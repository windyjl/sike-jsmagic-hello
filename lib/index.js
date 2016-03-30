"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.greet = greet;
function greet(name, zishu) {
	if (zishu) {
		return "I'm not change yet";
	} else {
		return "caonima," + name;
	}
}
var abc = exports.abc = undefined;
exports.abc = abc = "def";