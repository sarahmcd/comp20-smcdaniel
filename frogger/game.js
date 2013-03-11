var canvas;
var ctx;
var img;
var score;
var highScore;
var level;
var frogXPos;
var frogYPos;
var log1XPos;
var log1YPos;
var log2XPos;
var log2YPos;
var log3XPos;
var log3YPos;
var log4XPos;
var log4YPos;
var log5XPos;
var log5YPos;
var numLives;
var car1AXPos;
var car1AYPos;
var car1BXPos;
var car1BYPos;
var car2AXPos;
var car2AYPos;
var car2BXPos;
var car2BYPos;
var car2CXPos;
var car2CYPos;
var car3AXPos;
var car3AYPos;
var car3BXPos;
var car3BYPos;
var car3CXPos;
var car3CYPos;
var car4AXPos;
var car4AYPos;
var car4BXPos;
var car4BYPos;
var car4CXPos;
var car4CYPos;
var car5AXPos;
var car5AYPos;
var car5BXPos;
var car5BYPos;

// basic game loop for structuring frogger game
function game_loop(){
	// get, check, process input
	set_up();
	anim_loop();
}

function anim_loop(){
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	img = new Image();
	img.src = 'assets/frogger_sprites.png';
	img.onload = function(){
		setInterval(animate, 100);
	}
}

function animate(){
	// clear background
	ctx.clearRect(0, 0, 397, 563);
	
	// draw basic board
	draw_board();
	
	// move objects [logs, vehicles]
	if (car1AXPos >= 395) {car1AXPos = 0;}
	else {car1AXPos += 10;}
	if (car1BXPos >= 395) {car1BXPos = 0;}
	else {car1BXPos += 10;}
	if (car2AXPos >= 395) {car2AXPos = 0;}
	else {car2AXPos += 10;}
	if (car2BXPos >= 395) {car2BXPos = 0;}
	else {car2BXPos += 10;}
	if (car2CXPos >= 395) {car2CXPos = 0;}
	else {car2CXPos += 10;}
	if (car3AXPos >= 395) {car3AXPos = 0;}
	else {car3AXPos += 10;}
	if (car3BXPos >= 395) {car3BXPos = 0;}
	else {car3BXPos += 10;}
	if (car3CXPos >= 395) {car3CXPos = 0;}
	else {car3CXPos += 10;}
	if (car4AXPos >= 395) {car4AXPos = 0;}
	else {car4AXPos += 10;}
	if (car4BXPos >= 395) {car4BXPos = 0;}
	else {car4BXPos += 10;}
	if (car4CXPos >= 395) {car4CXPos = 0;}
	else {car4CXPos += 10;}
	if (car5AXPos >= 395) {car5AXPos = 0;}
	else {car5AXPos += 10;}
	if (car5BXPos >= 395) {car5BXPos = 0;}
	else {car5BXPos += 10;}
	
	if (log1XPos >= 395) {log1XPos = 0;}
	else {log1XPos += 10;}
	if (log2XPos >= 395) {log2XPos = 0;}
	else {log2XPos += 10;}
	if (log3XPos >= 395) {log3XPos = 0;}
	else {log3XPos += 10;}
	if (log4XPos >= 395) {log4XPos = 0;}
	else {log4XPos += 10;}
	if (log5XPos >= 395) {log5XPos = 0;}
	else {log5XPos += 10;}
	
	// draw rest of board features
	ctx.font="bold 14px sans-serif";
	ctx.fillStyle="Lime";
	ctx.fillText("Score: ", 4, 557);
	ctx.fillText(score, 54, 557);
	ctx.fillText("Highscore: ", 84, 557);
	ctx.fillText(highScore, 166, 557);
	ctx.font="bold 20px sans-serif";
	ctx.fillText("Level ", 68, 540);
	ctx.fillText(level, 130, 540);
	ctx.drawImage(img, 12, 369, 23, 18, frogXPos, frogYPos, 23, 18);			// frog piece
	ctx.drawImage(img, 7, 198, 116, 21, log1XPos, log1YPos, 116, 21);			// log1
	ctx.drawImage(img, 7, 198, 116, 21, log2XPos, log2YPos, 116, 21);			// log2
	ctx.drawImage(img, 7, 198, 116, 21, log3XPos, log3YPos, 116, 21);			// log3
	ctx.drawImage(img, 7, 198, 116, 21, log4XPos, log4YPos, 116, 21);			// log4
	ctx.drawImage(img, 7, 198, 116, 21, log5XPos, log5YPos, 116, 21);			// log5
	if (numLives >= 3) {ctx.drawImage(img, 13, 334, 18, 24, 36, 524, 14, 18);}	// life3
	if (numLives >= 2) {ctx.drawImage(img, 13, 334, 18, 24, 20, 524, 14, 18);}	// life2
	if (numLives >= 1) {ctx.drawImage(img, 13, 334, 18, 24, 4, 524, 14, 18);}	// life1
	ctx.drawImage(img, 82, 264, 24, 26, car1AXPos, car1AYPos, 24, 26);			// car1A
	ctx.drawImage(img, 46, 265, 24, 24, car1BXPos, car1BYPos, 24, 24);			// car1B
	ctx.drawImage(img, 106, 302, 48, 18, car2AXPos, car2AYPos, 48, 18);			// car2A
	ctx.drawImage(img, 10, 267, 28, 20, car2BXPos, car2BYPos, 28, 20);			// car2B
	ctx.drawImage(img, 106, 302, 48, 18, car2CXPos, car2CYPos, 48, 18);			// car2C
	ctx.drawImage(img, 10, 267, 28, 20, car3AXPos, car3AYPos, 28, 20);			// car3A
	ctx.drawImage(img, 73, 301, 23, 21, car3BXPos, car3BYPos, 23, 21);			// car3B
	ctx.drawImage(img, 10, 267, 28, 20, car3CXPos, car3CYPos, 28, 20);			// car3C
	ctx.drawImage(img, 106, 302, 48, 18, car4AXPos, car4AYPos, 48, 18);			// car4A
	ctx.drawImage(img, 10, 267, 28, 20, car4BXPos, car4BYPos, 28, 20);			// car4B
	ctx.drawImage(img, 106, 302, 48, 18, car4CXPos, car4CYPos, 48, 18);			// car4C
	ctx.drawImage(img, 82, 264, 24, 26, car5AXPos, car5AYPos, 24, 26);			// car5A
	ctx.drawImage(img, 46, 265, 24, 24, car5BXPos, car5BYPos, 24, 24);			// car5B
}

// draw basic board for frogger game [most fundamental unchanging elements]
function draw_board(){
	ctx = canvas.getContext('2d');
	ctx.fillStyle="#191970";
	ctx.fillRect(2, 2, 395, 275);
	ctx.fillStyle="#000000";
	ctx.fillRect(2, 311, 395, 252);
	img = new Image();
	img.onload = function(){
		ctx.drawImage(img, 5, 6, 338, 43, 5, 5, 338, 43);		// header
		ctx.drawImage(img, 0, 55, 395, 54, 2, 53, 395, 54);		// green shape
		ctx.drawImage(img, 0, 119, 395, 34, 2, 277, 395, 34);	// purple road
		ctx.drawImage(img, 0, 119, 395, 34, 2, 487, 395, 34);	// purple road
		// draw log boundary lines
		ctx.strokeStyle="Lime";
		ctx.moveTo(2, 108);
		ctx.lineTo(397, 108);
		ctx.stroke();
		ctx.moveTo(2, 142);
		ctx.lineTo(397, 142);
		ctx.stroke();
		ctx.moveTo(2, 176);
		ctx.lineTo(397, 176);
		ctx.stroke();
		ctx.moveTo(2, 210);
		ctx.lineTo(397, 210);
		ctx.stroke();
		ctx.moveTo(2, 244);
		ctx.lineTo(397, 244);
		ctx.stroke();
		// draw car boundary lines
		ctx.moveTo(2, 312);
		ctx.lineTo(397, 312);
		ctx.stroke();
		ctx.moveTo(2, 347);
		ctx.lineTo(397, 347);
		ctx.stroke();
		ctx.moveTo(2, 382);
		ctx.lineTo(397, 382);
		ctx.stroke();
		ctx.moveTo(2, 417);
		ctx.lineTo(397, 417);
		ctx.stroke();
		ctx.moveTo(2, 452);
		ctx.lineTo(397, 452);
		ctx.stroke();
	};
	img.src='assets/frogger_sprites.png';
}

// initialize parameters for game [e.g.: location of frog, cars, log]
function set_up(){
	score = 0;
	highScore = 0;
	level = 1;
	frogXPos = 190;
	frogYPos = 495;
	log1XPos = 240;
	log1YPos = 115;
	log2XPos = 112;
	log2YPos = 149;
	log3XPos = 60;
	log3YPos = 183;
	log4XPos = 240;
	log4YPos = 217;
	log5XPos = 112;
	log5YPos = 251;
	numLives = 3;
	car1AXPos = 24;
	car1AYPos = 316;
	car1BXPos = 300;
	car1BYPos = 316;
	car2AXPos = 20;
	car2AYPos = 355;
	car2BXPos = 170;
	car2BYPos = 355;
	car2CXPos = 320;
	car2CYPos = 355;
	car3AXPos = 10;
	car3AYPos = 386;
	car3BXPos = 170;
	car3BYPos = 386;
	car3CXPos = 340;
	car3CYPos = 386;
	car4AXPos = 20;
	car4AYPos = 424;
	car4BXPos = 170;
	car4BYPos = 424;
	car4CXPos = 320;
	car4CYPos = 424;
	car5AXPos = 24;
	car5AYPos = 458;
	car5BXPos = 300;
	car5BYPos = 458;
}
