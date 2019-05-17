$(document).ready(function() {
	console.log("Ready")
});

var imagestart;

function preload() {
	imagestart = loadImage("images/5b.png");
}

function setup() {
	createCanvas(800, 600);
	watchbutton = new Clickable();
	watchbutton.text = "WATCH BFDIA 5b";

	newbutton = new Clickable();
	newbutton.text = "NEW GAME";

	editorbutton = new Clickable();
	editorbutton.text = "LEVEL CREATOR";

	var list = [watchbutton,newbutton,editorbutton];
	for (i = 0;i < list.length; i++) {
		list[i].strokeWeight = 0;
		list[i].resize(280,50);
		list[i].textColor = "#666666FF";
		list[i].locate(width-300,height-(200-i*65));
	}

	watchbutton.onHover = function(){watchbutton.color = "#444444FF";}
	newbutton.onHover = function(){newbutton.color = "#444444FF";}
	editorbutton.onHover = function(){editorbutton.color = "#444444FF";}

	watchbutton.onOutside = function(){watchbutton.color = "#FFFFFFFF";}
	newbutton.onOutside = function(){newbutton.color = "#FFFFFFFF";}
	editorbutton.onOutside = function(){editorbutton.color = "#FFFFFFFF";}

	watchbutton.onPress = function(){
		window.location.href = "https://www.youtube.com/watch?v=4q77g4xo9ic";
	}

	editorbutton.onPress = function(){
		window.location.href = "https://zolo101.github.io/BFDIA5bLevelEditor/";
	}

	image(imagestart,50,50,1000,1000);
}

function draw() {
	background(102);
	textSize(width/2);
	fill(255,255,255);
	textStyle(BOLD);
	text("5b",40,height-128,500,500);
	textSize(30);
	newbutton.draw();
	watchbutton.draw();
	editorbutton.draw();
}

