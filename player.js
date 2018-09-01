var lastSquare = -1;
var nextSquare = -1;

var difference = 0;

var take = false;
var check = false;

var pieceType;
var color;

//Mutation Observer Will analyze mutations and make sense of what move is being made
var boardObserver = new MutationObserver(function(mutations) {

	mutations.forEach(function(mutation) {

		var mutationTarget = mutation.target;		//Makes things simpler when I want to reference the target of the Node

			/******* CHECKS AND TAKES *****/
			if (mutationTarget.className == 'cg-board' && mutation.removedNodes.length > 0 && mutation.removedNodes[0].nodeName == "PIECE") {
				take = true;
			}
			if (mutationTarget.className == 'cg-board' && mutation.addedNodes.length > 0 && mutation.addedNodes[0].className == "check") {
				check = true;
			}
			if (mutationTarget.nodeName == 'PIECE') {
				if (!mutationTarget.className.includes("dragging") && !mutationTarget.className.includes("ghost") && !mutationTarget.className.includes("anim")) {
					console.log(mutationTarget.className);
					var stringArr = mutationTarget.className.split(" ");
					color = stringArr[0];
					pieceType = stringArr[1];
					console.log("The color is " + color);
					console.log("The piece is " + pieceType);
				}
			}

	});
});


//Board Observer observing the page
boardObserver.observe(document.documentElement, {
	childList: true,
	subtree: true,
    attributes: true,
    attributeFilter: ["style"]
});

//Move Class
function Move(i_take, i_check, i_checkmate, i_piece, i_difference) {
	this.takeM = i_take;
	this.checKM = i_check;
	this.checkMate = i_checkmate;
	this.pieceM = i_piece;
	this.differenceM = i_difference; 
}