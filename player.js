var from = null;
var lastMove;

var take = false;
var check = false;

//Mutation Observer Will analyze mutations and make sense of what move is being made

var boardObserver = new MutationObserver(function(mutations) {


	/****** CHECKING FOR CHECKS OR TAKES *****/

	console.log(mutations.length);
	
	if (mutations.length == 3) {
		if (mutations[2].target.className == 'cg-board' && mutations[2].target.removedNodes.length > 0) {
			take = true;
		}
		else if (mutations[2].target.className == 'cg-board' && mutations[2].target.removedNodes.length > 0) {
			check = true;
		}
	}
	else {
		take = false;
		check = false;
	}

	/****** IDENTIFYING THE MOVE *****/

	mutations.forEach(function(mutation) {

		var mutationTarget = mutation.target;		//Makes things simpler when I want to reference the target of the Node

		if (mutationTarget.className == 'last-move' && mutationTarget.clientHeight == 64) {			//attributes (moving peices (comes in pairs of two))
			console.log(mutationTarget.attributes.style);
			console.log(take);
			console.log(check);
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