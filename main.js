$(document).ready(function() {
	backgrounddiv.style.backgroundImage = backgrounds[0][1];
	backgrounddiv.style.backgroundSize = "cover";
	$('#javascriptneed').remove(); // if javascript is present.
	//makeLevel(levelheight,levelwidth);
	makeLevel(levelheight,levelwidth);
	sendOutput();
	backgroundSendOutput();
	//for selectbox
	var selectboxinfo = document.createElement("p");
	selectboxinfo.id = "selectboxname";
	document.getElementById("selectbox").appendChild(selectboxinfo);

	// var selectboxreset = document.createElement("button");
	// selectboxreset.id = "selectboxreset";
	// selectboxreset.innerHTML = "Reset level";
	// selectboxreset.onclick = function(){resetlevel();};
	// document.getElementById("selectboxinfo").appendChild(selectboxreset);

	var output = document.createElement("button");
	output.id = "outputbox";
	output.innerHTML = "Send Output";
	output.onclick = function(){createOutput();};
	document.getElementById("outputbox").appendChild(output);
	selectBox(levelheight*levelwidth);
	grid(".", levelheight*levelwidth);
	createOutput();
});

var backgrounddiv = document.getElementById("background");
var currentback = "00";
backgrounds = [["00", "url('images/backgrounds/00.png')", "images/backgrounds/00.png"],
					["02", "url('images/backgrounds/02.png')", "images/backgrounds/02.png"],
					["03", "url('images/backgrounds/03.png')", "images/backgrounds/03.png"],
					["07", "url('images/backgrounds/07.png')", "images/backgrounds/07.png"],
					["11", "url('images/backgrounds/11.png')", "images/backgrounds/11.png"]];

items = [[".", "#FFFFFF"],
				["/","url('images/Slash.png')"],
				["7", "url('images/7.png')"],
				["8", "url('images/8.png')"],
				["9", "url('images/9.png')"],
				["4", "url('images/EXIT2.png')"],
				[":", "url('images/WT.png')"],
				["0", "url('images/SpikesDOWN.png')"], // Spikes
				["1", "url('images/SpikesUP.png')"],
				["2", "url('images/SpikesRIGHT.png')"],
				["3", "url('images/SpikesLEFT.png')"],
				["v", "url('images/SpikesLEFT.png')"],
				//["String.fromCharCode(0x003C)", "url('images/ConvLEFT.png')"], // Conveyor, doesnt work :(
				//["String.fromCharCode(0x003E)", "url('images/ConvRIGHT.png')"],
				[";", "url('images/Spring.png')"], // Spring
				["M", "url('images/Yellow1.png')"], // Switch
				["N", "url('images/Yellow2.png')"],
				["O", "url('images/InvisibleYellow1.png')"],
				["P", "url('images/InvisibleYellow2.png')"],
				["Q", "url('images/YellowLEFT.png')"],
				["R", "url('images/YellowRIGHT.png')"],
				["V", "url('images/YellowSwitch.png')"],
				["=", "url('images/Equal.png')"],
				["@", "url('images/Plat1.png')"], // Platform
				["r", "url('images/Plat2.png')"],
				["Z", "url('images/Plat3.png')"],
				["s", "url('images/Plat4.png')"],
				[String.fromCharCode(0x2555), "url('images/Lava.png')"],
				[String.fromCharCode(0x2524), "url('images/Acid.png')"],
				["_", "url('images/Lamp.png')"], // Deco
				["`", "url('images/GrayGems.png')"],
				["6", "url('images/6.png')"]]; // Misc

var levelwidth = 32;
var levelheight = 18;

var level = [];
for (var i = 0; i < levelwidth*levelheight; i++) {
	level.push(".");
}

console.log(level.length);
var selected = 0;
var output = document.getElementById("output");
var oldnum = 10;
var square1 = 0;
var square2 = 0;

// window.setInterval(function() {
	createOutput();
// }, 5000);

function createOutput() {
	output.innerHTML = "";
	output.innerHTML += "Level\n";
	output.innerHTML += levelwidth + "," + levelheight + "," + currentback + ",00,L"; // The Start
	for (var i = 1; i < level.length; i++) {
		if (i % levelwidth == 1) {
			output.innerHTML += "\n";
		}

		output.innerHTML += level[i];
	}

	output.innerHTML += "\n01,03.50,00.00,10\n00\n000000"; // Book & End
}

function setupButton() {
	for (var i = 0; i < level.length; i++) {
		createButton(i);
	}
}

function setupBoxes(box) {
	var firstofstring = box.innerHTML.slice(-1);
	box.onclick = function(){grid(firstofstring, selected)};
}

// function paintbrush() {
// 	var firstofstring = box.innerHTML.slice(-1);
// 	var checkbrush = document.getElementById("checkbox");
// 	var buttonbutton = document.getElementsByTagName('box');
// 	if (checkbrush.value == "true") {
// 		buttonbutton.onmousedown = function(){grid()}
// 	}
// }

// function fromto() {
// 	square1 = selected;
// 	var sbutton = document.getElementById("fromtobutton");
// 	sbutton.innerHTML = "You have selected tile " + square1 + ". Enter a Symbol then Select another one!";
// 	sbutton.setAttribute("onclick","fromto2();");
// }

// function fromto2() {
// 	square2 = selected;
// 	var symbolbutton = document.getElementById("symbolbutton");
// 	var sbutton = document.getElementById("squarebutton");
// 	var symboltext = symbolbutton.value;
// 	var h = 0;
// 	// for (var i = Math.ceil(square1/levelwidth); i = numid2xy(1, selected); i++) { // y
// 	// 	h++;
// 	// 	for (var j = numid2xy(1, square1); j = numid2xy(2, square2); j++) { // x
// 	// 		selectBox(Number()+j/*(numid2xy(2, square1)*/);
// 	// 		grid(j);
// 	// 	}
// 	// }
// 	//if (numid2xy(2, square1) == numid2xy(2, square2)) {
// 		for (var i = square1; i < square2; i++) {
// 			selectBox(i);
// 			grid(symboltext, i);
// 		}
// 	//}
// 	selectBox(square2);
// 	grid(symboltext, square2);
// 	sbutton.innerHTML = "From, To";
// 	sbutton.setAttribute("onclick","fromto();");
// }

function square() {
	square1 = selected;
	var sbutton = document.getElementById("squarebutton");
	sbutton.innerHTML = "You have selected tile " + square1 + ". Enter a Symbol then Select another one!";
	sbutton.setAttribute("onclick","squareup2();");
}

function squareup2() {
	square2 = selected;
	var symbolbutton = document.getElementById("symbolbutton");
	var sbutton = document.getElementById("squarebutton");
	var symboltext = symbolbutton.value;
	var h = 0;
	// for (var i = Math.ceil(square1/levelwidth); i = numid2xy(1, selected); i++) { // y
	// 	h++;
	// 	for (var j = numid2xy(1, square1); j = numid2xy(2, square2); j++) { // x
	// 		selectBox(Number()+j/*(numid2xy(2, square1)*/);
	// 		grid(j);
	// 	}
	// }
	//if (numid2xy(2, square1) == numid2xy(2, square2)) {
		for (var h = numid2xy(1,square1); h < numid2xy(1,square2)+1; h++) {
			for (var i = numid2xy(2, square1); i < numid2xy(2, square2)+1; i++) {
				selectBox(xy2numid(2,i,h));
				console.log(numid2xy(1,square1));
				grid(symboltext, xy2numid(2,i,h));
			}
			//selectBox(xy2numid(2,0,h));
			//console.log(numid2xy(1,square1));
			//grid(symboltext, xy2numid(2,0,h));
		}
	//}
	selectBox(square2);
	grid(symboltext, square2);
	sbutton.innerHTML = "Square";
	sbutton.setAttribute("onclick","square();");
}


function numid2xy(num, variablee) { // variablee = numid
	if (num == 1) { // y
		return Math.ceil(variablee/levelwidth);
	}

	if (num == 2) { // x
		if ((variablee/levelheight)*levelheight % levelwidth == 0) {
			return levelwidth;
		} else {
			return (variablee/levelheight)*levelheight % levelwidth;
		}
	}
}

function xy2numid(num,x,y) {
	var ything = (levelwidth * y) - levelwidth + 1;
	if (num == 1) { // y
		return ything;
	}

	if (num == 2) { // x
		return ything + x - 1;
	}
	return ything + x - 1;
	//console.log((levelwidth * y) - levelwidth + 1); // y level
	//console.log(ything + x - 1); // x level
}

function sendOutput() {
	var b = 0;
	for (var i = 0; i < 1; i++) {
		var blockrow = document.createElement("div");
		blockrow.id = "blockrow";
		for (var j = 0; j < items.length; j++) {
			b++;
			var block = document.createElement("div");
			block.id = "block" + b;
			//unicode = b+47;
			//block.innerHTML = "&#0" + unicode;
			
			block.innerHTML = items[b-1][0];
			block.style.background = items[b-1][1];
			block.style.backgroundSize = "cover";
			block.style.backgroundColor = "#DBDBDBFF";
			blockrow.appendChild(block);
			block.className = "block";
			setupBoxes(block);
		}
		document.getElementById("item-selection").appendChild(blockrow);
	}
}

function backgroundSendOutput() {
	for (var i = 0; i < backgrounds.length; i++) {
		var backgroundblock = document.createElement("div");
		backgroundblock.id = "backgroundblock" + i;

		backgroundblock.innerHTML = backgrounds[i][0];
		backgroundblock.style.background = backgrounds[i][1];
		backgroundblock.style.backgroundPosition = "center";
		backgroundblock.style.backgroundSize = "cover";
		backgroundblock.className = "backgroundblock";
		document.getElementById("backgroundrow").appendChild(backgroundblock);
		setBackground(i);
	}
}

function setBackground(background) {
	document.getElementById("backgroundblock" + background).onclick = function(){
		document.getElementById("background").style.backgroundImage = backgrounds[background][1];
		currentback = backgrounds[background][0];
	};
}

function createButton(num) {
	var numer = num+1;
	var buttonbutton = document.createElement("button");
	buttonbutton.id = "numtext";
	buttonbutton.innerHTML = numer;
	document.getElementById(numer).appendChild(buttonbutton);
	buttonbutton.onclick = function(){selectBox(buttonbutton.parentElement.id)};
}

function makeLevel(iv,jv) {
	var c = 0; // how much boxes we have made
	for (var i = 0; i < iv; i++) {
		var levelrow = document.createElement("div");
		levelrow.id = "levelrow";
		for (var j = 0; j < jv; j++) {
			var i;
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

// function deleteLevel() {
// 	for (var i = 0; i < levelheight; i++)
// 	$("#levelrow").remove();
// }

// function changeLevel() {
// 	levelwidth = document.getElementById("levelwidth").value;
// 	levelheight = document.getElementById("levelheight").value;
// }

function selectBox(numid) {
	selected = numid;
	//var selectedBox = level[numid-1];
	var levelbox = document.getElementById(numid);
	var boxstyle = levelbox.style;
	var oldbox = document.getElementById(oldnum);
	oldbox.style.outline = "1px solid gray";
	document.getElementById("selectboxtext").innerHTML = "You have selected tile " + numid + ".";
	boxstyle.outline = "3px solid red";
	//console.log(numid);
	//console.log((numid/levelheight)*levelheight % levelwidth); // x
	//if ((numid/levelheight)*levelheight % levelwidth == 0) {
	//	console.log(32);
	//} else {
	//	console.log((numid/levelheight)*levelheight % levelwidth);
	//}
	//console.log(Math.ceil(numid/levelwidth)); // y
	//console.log(levelheight*(numid/levelheight));

	oldnum = numid;
}

// function resetlevel() {
// 	level = [];
// 	for (var i = 0; i < level.length; i++) {
// 		document.getElementById(i).style.background = "#f6f8f9";
// 	}
// 	document.getElementById("selectboxtext").innerHTML = "You're not selecting any tiles.";
// }

function grid(symbol, gridnum) {
	var gridblock = document.getElementById(gridnum);
	for (i = 0; i < items.length; i++) {
		if (symbol == items[i][0]) {
			gridblock.style.background = items[i][1];
		}
	}
	gridblock.style.backgroundSize = "20px 20px";
	level[gridnum] = symbol;
	//createOutput(); // this automates outputting, although it makes functions lag.
}
