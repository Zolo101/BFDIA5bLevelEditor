//If a function is basically finished and doesn't need to be in main.js then it'll be here.

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

// This is basically my way of getting x and y off a tile. Pretty bad but it works.

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