//var take = false;
//var check = false;

var pieceType;
var color;

var latestMove = new Move();
var main_counter = 0;

var counter = 0;

var majorChords = ["AMajor", "CMajor", "DMajor", "EMajor", "GMajor"];
var diminishedChords = ["ADim", "CDim", "BDim"];
var minorChords = ["FMinor", "AMinor", "EMinor", "CMinor"];
var majorSeven = ["CMajor7", "EMajor7", "DMajor7"];
var augmentedChords = ["EAug", "DAug", "BAug"];
var oneNote = ["C", "A", "B", "D", "E", "F", "G"];

//Mutation Observer Will analyze mutations and make sense of what move is being made
var boardObserver = new MutationObserver(function(mutations) {

	mutations.forEach(function(mutation) {

		main_counter++;

		var mutationTarget = mutation.target;		//Makes things simpler when I want to reference the target of the Node

			/******* CHECKS AND TAKES *****/
		if (counter == 1) {
			if (mutationTarget.className == 'cg-board' && mutation.addedNodes.length > 0 && mutation.addedNodes[0].className == "check") {
				//check = true;
				latestMove.setCheck(true);
				//console.log("check");
			}
			else if (mutationTarget.className == 'cg-board' && mutation.removedNodes.length > 0 && mutation.removedNodes[0].nodeName == "PIECE") {
				//take = true;
				latestMove.setTake(true);
				//console.log("take");
			}	
			else if (main_counter >= 5) {
				console.log(latestMove);
				latestMove.determineChord();
				latestMove = new Move();
				counter = 0;
				main_counter = 0;
			}
		}


		else if (mutationTarget.nodeName == 'PIECE') {
			if (!mutationTarget.className.includes("dragging") && !mutationTarget.className.includes("ghost") && !mutationTarget.className.includes("anim")) {
				//console.log(mutationTarget.className);
				var stringArr = mutationTarget.className.split(" ");
				color = stringArr[0];
				pieceType = stringArr[1];
				console.log("The color is " + color);
				console.log("The piece is " + pieceType);
				latestMove.setColor(color);
				latestMove.setPiece(pieceType);
				if (color == "white") {
					main_counter = 0;
					counter = 1;	
				}
				else {
					console.log(latestMove);
					latestMove.determineChord();
					latestMove = new Move();
				}
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
function Move() {
	this.takeM = false;
	this.checkM = false;
	this.pieceM;
	this.colorM;
	
	this.setCheck = function(i_check) { this.checkM = i_check; }
	this.setTake = function(i_take) { this.takeM = i_take; }
	this.setPiece = function(i_piece) { this.pieceM = i_piece; }
	this.setColor = function(i_color) { this.colorM = i_color; }

	this.determineChord = function() {
		if (this.colorM == "black") {
			if (this.pieceM == "pawn") {
				console.log(oneNote[Math.floor(Math.random() * oneNote.length)]);
			}
			else if (this.pieceM == "queen") {
				console.log(minorChords[Math.floor(Math.random() * minorChords.length)]);
			}
			else {
				console.log(diminishedChords[Math.floor(Math.random() * diminishedChords.length)]);
			}
		}
		else {
			if (this.takeM & !this.checkM) {
				console.log(augmentedChords[Math.floor(Math.random() * augmentedChords.length)]);
			}
			else if (this.checkM & !this.takeM) {
				console.log(diminishedChords[Math.floor(Math.random() * diminishedChords.length)]);
			}
			else if (this.checkM & this.takeM) {
				console.log(majorSeven[Math.floor(Math.random() * majorSeven.length)])
			}
			else if (this.pieceM == "pawn") {
				console.log(oneNote[Math.floor(Math.random() * oneNote.length)]);
			}
			else {
				console.log(majorChords[Math.floor(Math.random() * majorChords.length)]);
			}
		}
	}


}