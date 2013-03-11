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
var car1XPos;
var car1YPos;
var car2XPos;
var car2YPos;
var car3XPos;
var car3YPos;

// basic game loop for structuring frogger game
function game_loop(){
	// get, check, process input
//	draw_board();
	set_up();
	anim_loop();
//	start_game();
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
	if (car1XPos >= 395) {car1XPos = 0;}
	else {car1XPos += 10;}
	if (car2XPos >= 395) {car2XPos = 0;}
	else {car2XPos += 10;}
	if (car3XPos >= 395) {car3XPos = 0;}
	else {car3XPos += 10;}
	
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
	ctx.drawImage(img, 82, 264, 24, 26, car1XPos, car1YPos, 24, 26);			// car1
	ctx.drawImage(img, 46, 265, 24, 24, car2XPos, car2YPos, 24, 24);			// car2
	ctx.drawImage(img, 106, 302, 48, 18, car3XPos, car3YPos, 48, 18);			// car3

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
	car1XPos = 120;
	car1YPos = 316;
	car2XPos = 312;
	car2YPos = 458;
	car3XPos = 96;
	car3YPos = 424;
}
