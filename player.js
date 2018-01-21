var from = null;
var lastMove;

var take = false;
var check = false;

//Mutation Observer Will analyze mutations and make sense of what move is being made

var boardObserver = new MutationObserver(function(mutations) {

	mutations.forEach(function(mutation) {

		var mutationTarget = mutation.target;		//Makes things simpler when I want to reference the target of the Node

		/****** CHECKING FOR CHECKS OR TAKES *****/

		// if (mutationTarget.className == 'cg-board') {
		// 	console.log(mutation);
		// 	console.log(mutation.addedNodes);
		// 	console.log(mutation.addedNodes.length);
		// }

		if (mutationTarget.className == 'cg-board' && mutation.removedNodes.length > 0) {
			take = true;
		}
		else { take = false; }

		if (mutationTarget.className == 'cg-board' && mutation.addedNodes.length > 0) {
			check = true;
			console.log(mutation);
		}
		else { check = false; }

		/****** IDENTIFYING THE MOVE *****/

		// if (mutationTarget.className == 'last-move' && mutationTarget.clientHeight == 64) {			//attributes (moving peices (comes in pairs of two))
		// 	//console.log(mutationTarget.attributes.style);
		// }

		// if (mutationTarget.className == "moves") {		//Only care about mutations that are moves on the board
			
		// 	//console.log(mutation);

		// 	var moveArray = mutationTarget.childNodes;

		// 	console.log(moveArray[moveArray.length-2].innerText);
		// }
	});
	if (check) { console.log("CHECK!"); }
	if (take) { console.log("TAKE!"); }
});

boardObserver.observe(document.documentElement, {
	childList: true,
	subtree: true,
    attributes: true,
    attributeFilter: ["style"]
});

console.log("running");