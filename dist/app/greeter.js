'use strict';

function greeter() {
	var msg = arguments.length <= 0 || arguments[0] === undefined ? 'hello world!' : arguments[0];
	//use default  feature from babel (es6)
	return msg;
}

module.exports = greeter;