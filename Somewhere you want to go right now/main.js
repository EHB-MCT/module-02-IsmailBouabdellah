/**
 * Taak : Somewhere you want to go right now
 * Naam : Bouabdellah Ismail
 * Datum : 30 maart 2026
 */

let canvas;
let horizonHeight;
let skyTopColor, skyBottomColor, seaColor, sandColor;

function setup() {
	canvas = createCanvas(800, 600);
	canvas.parent("p5-canvas-container");

	angleMode(DEGREES);
	horizonHeight = height * 0.6;

	skyTopColor = color(75, 0, 130);
	skyBottomColor = color(255, 140, 0);
	seaColor = color(0, 105, 148);
	sandColor = color(238, 214, 175);
}

function draw() {
	background(255);

	// Lucht
	for (let y = 0; y < horizonHeight; y++) {
		let inter = map(y, 0, horizonHeight, 0, 1);
		let c = lerpColor(skyTopColor, skyBottomColor, inter);
		stroke(c);
		line(0, y, width, y);
	}

	// Zon
	noStroke();
	fill(255, 220, 100);
	ellipse(width / 2, horizonHeight, 120, 120);

	// Zee
	fill(seaColor);
	rect(0, horizonHeight, width, height - horizonHeight);

	// Zand
	fill(sandColor);
	ellipse(width / 2, height + 20, width * 1.5, 350);
}
