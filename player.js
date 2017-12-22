var from = null;
var lastMove;

//Mutation Observer Will analyze mutations and make sense of what move is being made

var boardObserver = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {

		var mutationTarget = mutation.target;		//Makes things simpler when I want to reference the target of the Node

		if (mutationTarget.className == "moves") {		//Only care about mutations that are moves on the board
			
			//console.log(mutation);

			var moveArray = mutationTarget.childNodes;

			console.log(moveArray[moveArray.length-2].innerText);
		}
	});
});

boardObserver.observe(document.documentElement, {
	childList: true,
	subtree: true
});

console.log("running");