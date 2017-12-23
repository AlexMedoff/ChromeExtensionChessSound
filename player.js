var from = null;
var lastMove;

var take = false;

//Mutation Observer Will analyze mutations and make sense of what move is being made

var boardObserver = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {

		var mutationTarget = mutation.target;		//Makes things simpler when I want to reference the target of the Node

		//console.log(mutationTarget);

		if (mutationTarget.className == 'cg-board' && mutation.removedNodes.length > 0) {
			console.log(mutation);
		}

		if (mutationTarget.className == 'last-move' && mutationTarget.clientHeight == 64) {
			//console.log(mutationTarget.attributes.style);
			//console.log(mutation);
			
		}

		// if (mutationTarget.className == "moves") {		//Only care about mutations that are moves on the board
			
		// 	//console.log(mutation);

		// 	var moveArray = mutationTarget.childNodes;

		// 	console.log(moveArray[moveArray.length-2].innerText);
		// }
	});
});

boardObserver.observe(document.documentElement, {
	childList: true,
	subtree: true,
    attributes: true,
    attributeFilter: ["style"]
});

console.log("running");