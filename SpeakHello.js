// IIFE that exposes the inner function to the Global scope of the program
(function (window) {
	var helloSpeaker = {};
	helloSpeaker.speak = function (name) {
		console.log('Hello' + ' ' + name);
	};
	window.helloSpeaker = helloSpeaker;
})(window);


