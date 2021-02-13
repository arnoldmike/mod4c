// IIFE that exposes the inner function to the Global scope of the program
(function (window) {
	var byeSpeaker = {};
	byeSpeaker.speak = function (name) {
		console.log('Good Bye' + ' ' + name);
	};
	window.byeSpeaker = byeSpeaker;
})(window);