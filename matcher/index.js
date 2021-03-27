'use strict';

const patterns = require('../patterns');
const XRegExp = require('xregexp');

let matchPattern = (str, country, cb) => {
	let getResult = patterns.find(item => {
		if(XRegExp.test(str, XRegExp(item.pattern, "i"))){
			return true;
		}
	});

	if(getResult){
		if(getResult.intent == 'Hello'){
			return cb({intent: "Which country did you enjoy the most visting ?"});
		}
		else {
			if(country.length == 2){
				return cb({
					country: getResult.intent,
					intent: "We are calculating your dream destination !",
					entities: createEntities(str, getResult.pattern)
				});
			}
			else {
				return cb({
					country: getResult.intent,
					intent: "What other country did you love visiting ?",
					entities: createEntities(str, getResult.pattern)
				});
			}
			
		}
	}
	else{
		return cb({intent: "I did not understand, maybe i will in a futur update :)"});
	}
}

let createEntities = (str, pattern) => {
	return XRegExp.exec(str, XRegExp(pattern, "i"))
}

module.exports = matchPattern;