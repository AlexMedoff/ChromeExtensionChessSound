var from = null;
var lastMove;

var boardObserver = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		console.log("MUTATION OBSERVED");
	});
});

boardObserver.observe(document.documentElement, {
	childList: true,
	subtree: true
});

console.log("running");