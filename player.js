var lastSquare = -1;
var nextSquare = -1;

var difference = 0;

var take = false;
var check = false;

//Mutation Observer Will analyze mutations and make sense of what move is being made
var boardObserver = new MutationObserver(function(mutations) {

	mutations.forEach(function(mutation) {

		var mutationTarget = mutation.target;		//Makes things simpler when I want to reference the target of the Node

		/********* CHECKS AND TAKES ********/
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
		if (mutationTarget.className == 'last-move' && mutationTarget.clientHeight == 64) {			//attributes (moving peices (comes in pairs of two))
			var full_string_translate = mutationTarget.outerHTML;	//Getting a string of the whole translate html
			var index1 = (full_string_translate.indexOf(",") + 2);	//Findinx index of beggining of Y translation
			var index2 = (full_string_translate.indexOf(")") - 2);		//Finding index of end of Y translation
			var YPos = full_string_translate.slice(index1, index2);		//Slicing the full string so that now I just have the Ytranslation
			console.log(YPos);
			if (lastSquare < 0) {
				lastSquare = YPos;
			}
			else {
				nextSquare = YPos;
				difference = (nextSquare - lastSquare);
				console.log("The difference is " + difference);
			}
			console.log(mutation);
		}

		// if (mutationTarget.className == "moves") {		//Only care about mutations that are moves on the board
			
		// 	//console.log(mutation);
		// 	var moveArray = mutationTarget.childNodes;
		// 	console.log(moveArray[moveArray.length-2].innerText);
		// }
	});
	if (check) { console.log("CHECK!"); }
	if (take) { console.log("TAKE!"); }
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