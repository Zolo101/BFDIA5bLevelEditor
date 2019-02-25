$(document).ready(function() {
	$('#javascriptneed').remove(); // if javascript is present.
	makeLevel(18,32);
	sendOutput();
	//for selectbox
	var selectboxinfo = document.createElement("p");
	selectboxinfo.id = "selectboxname";
	document.getElementById("selectbox").appendChild(selectboxinfo);

	var selectboxreset = document.createElement("button");
	selectboxreset.id = "selectboxreset";
	selectboxreset.innerHTML = "Reset level";
	selectboxreset.onclick = function(){resetlevel();};
	document.getElementById("selectboxinfo").appendChild(selectboxreset);

	var output = document.createElement("button");
	output.id = "outputbox";
	output.innerHTML = "Send Output";
	output.onclick = function(){createOutput();};
	document.getElementById("outputbox").appendChild(output);
});

var level = [];
for (var i = 0; i < 32*18; i++) {
	level.push(".");
}
console.log(level.length);
var outputlevel = "";
var selected = 0;
var lol = 1;
var lol2 = 0;
var num = 0;
var output = document.getElementById("output");

// window.setInterval(function() {
	createOutput();
// }, 5000);

function createOutput() {
	output.innerHTML = "";
	for (var i = 0; i < level.length; i++) {
		if (i % 32 == 0) {
			output.innerHTML += "\n";
		}

		output.innerHTML += level[i];
	}
}

function setupButton() {
	for (var i = 1; i < level.length+1; i++) {
		createButton(i);
	}
}

function setupBoxes(object) {
	object.onclick = function(){grid(object.innerHTML, selected)};
}

var items = ["/", "4", ":", "1"];

function sendOutput() {
	var b = 0;
	for (var i = 1; i < 1+1; i++) {
		var blockrow = document.createElement("div");
		blockrow.id = "blockrow";
		for (var j = 1; j < 4+1; j++) {
			b++;
			var block = document.createElement("div");
			block.id = "block" + b;
			//unicode = b+47;
			//block.innerHTML = "&#0" + unicode;
			block.innerHTML = items[b-1];
			blockrow.appendChild(block);
			block.className = "block";
			setupBoxes(block);
		}
		document.getElementById("item-selection").appendChild(blockrow);
	}
}

function createButton(num) {
	var numer = num
	var buttonbutton = document.createElement("button");
	buttonbutton.id = "numtext";
	buttonbutton.innerHTML = numer;
	document.getElementById(numer).appendChild(buttonbutton);
	buttonbutton.onclick = function(){selectBox(buttonbutton.parentElement.id)};
}

function makeLevel(iv,jv) {
	var c = 0; // how much boxes we have made
	for (var i = 1; i < iv+1; i++) {
		var levelrow = document.createElement("div");
		levelrow.id = "levelrow";
		for (var j = 1; j < jv+1; j++) {
			c++;
			var levelbox = document.createElement("div");
			levelbox.id = c;
			levelrow.appendChild(levelbox);
			levelbox.className = "box";
		}
		document.getElementById("level").appendChild(levelrow);
	}
	setupButton();
}

function selectBox(numid) {
	numid1 = numid-1;
	selected = numid;
	var selectedBox = level[numid1];
	var levelbox = document.getElementById(numid);
	var boxstyle = levelbox.style;
	document.getElementById("selectboxtext").innerHTML = "You have selected box " + numid + ". Please enter a character.";
	boxstyle.background = "#A3A3A380";
	console.log(numid);
}

function resetlevel() {
	level = [];
	for (var i = 1; i < level.length+1; i++) {
		document.getElementById(i).style.background = "#f6f8f9";
	}
	document.getElementById("selectboxtext").innerHTML = "You're not selecting any boxes";
}

function grid(symbol, gridnum) {
	var gridblock = document.getElementById(gridnum);
	if (symbol == "/") {
		gridblock.style.background = "url(images/Slash.png)";
	}
	if (symbol == "4") {
		gridblock.style.background = "url(images/EXIT.png)";
	}
	if (symbol == ":") {
		gridblock.style.background = "url(images/WT.png)";
	}
	if (symbol == "1") {
		gridblock.style.background = "url(images/SpikesUP.png)";
	}
	gridblock.style.backgroundSize = "20px 20px";
	level[gridnum-1] = symbol;
}