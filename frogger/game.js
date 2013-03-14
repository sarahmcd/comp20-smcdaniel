var canvas;
var ctx;
var img;
var score;
var highScore;
var level;
var numLives;
var numSuccess;
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
	set_up();
	anim_loop();
}

function anim_loop(){
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	img = new Image();
	img.src = 'assets/frogger_sprites.png';
	img.onload = function(){
		setInterval(animate, 98);
		window.addEventListener('keydown', userKey, true);
	}
}

function animate(){
	// clear background
	ctx.clearRect(0, 0, 397, 563);
	
	// draw basic board
	draw_board();
	
	// move objects [logs, vehicles]
	move();
	
	// check if frogger has hit a vehicle
	check_collide();
	
	// draw rest of board features
	draw_pieces();
}

function move(){
	if (car1AXPos >= 395) {car1AXPos = -24;}
	else {car1AXPos += 7;}
	if (car1BXPos >= 395) {car1BXPos = -24;}
	else {car1BXPos += 7;}
	if (car2AXPos >= 395) {car2AXPos = -48;}
	else {car2AXPos += 7;}
	if (car2BXPos >= 395) {car2BXPos = -28;}
	else {car2BXPos += 7;}
	if (car2CXPos >= 395) {car2CXPos = -48;}
	else {car2CXPos += 7;}
	if (car3AXPos >= 395) {car3AXPos = -28;}
	else {car3AXPos += 7;}
	if (car3BXPos >= 395) {car3BXPos = -23;}
	else {car3BXPos += 7;}
	if (car3CXPos >= 395) {car3CXPos = -28;}
	else {car3CXPos += 7;}
	if (car4AXPos >= 395) {car4AXPos = -48;}
	else {car4AXPos += 7;}
	if (car4BXPos >= 395) {car4BXPos = -28;}
	else {car4BXPos += 7;}
	if (car4CXPos >= 395) {car4CXPos = -48;}
	else {car4CXPos += 7;}
	if (car5AXPos >= 395) {car5AXPos = -24;}
	else {car5AXPos += 7;}
	if (car5BXPos >= 395) {car5BXPos = -24;}
	else {car5BXPos += 7;}
	
	if (log1XPos >= 395) {log1XPos = -116;}
	else {log1XPos += 7;}
	if (log2XPos >= 395) {log2XPos = -116;}
	else {log2XPos += 7;}
	if (log3XPos >= 395) {log3XPos = -116;}
	else {log3XPos += 7;}
	if (log4XPos >= 395) {log4XPos = -116;}
	else {log4XPos += 7;}
	if (log5XPos >= 395) {log5XPos = -116;}
	else {log5XPos += 7;}
}

// check if frog piece has collided with vehicle
function check_collide(){
	if ((frogXPos < car1AXPos + 24) && (frogXPos + 23 > car1AXPos) && (frogYPos < car1AYPos + 26) && (frogYPos + 18 > car1AYPos)){
		numLives += -1;	
	}
	if ((frogXPos < car1BXPos + 24) && (frogXPos + 23 > car1BXPos) && (frogYPos < car1BYPos + 24) && (frogYPos + 18 > car1BYPos)){
		numLives += -1;
	}
	if ((frogXPos < car2AXPos + 48) && (frogXPos + 23 > car2AXPos) && (frogYPos < car2AYPos + 18) && (frogYPos + 18 > car2AYPos)){
		numLives += -1;
	}
	if ((frogXPos < car2BXPos + 28) && (frogXPos + 23 > car2BXPos) && (frogYPos < car2BYPos + 20) && (frogYPos + 18 > car2BYPos)){
		numLives += -1;
	}
	if ((frogXPos < car2CXPos + 48) && (frogXPos + 23 > car2CXPos) && (frogYPos < car2CYPos + 18) && (frogYPos + 18 > car2CYPos)){
		numLives += -1;
	}
	if ((frogXPos < car3AXPos + 28) && (frogXPos + 23 > car3AXPos) && (frogYPos < car3AYPos + 20) && (frogYPos + 18 > car3AYPos)){
		numLives += -1;
	}
	if ((frogXPos < car3BXPos + 23) && (frogXPos + 23 > car3BXPos) && (frogYPos < car3BYPos + 21) && (frogYPos + 18 > car3BYPos)){
		numLives += -1;
	}
	if ((frogXPos < car3CXPos + 28) && (frogXPos + 23 > car3CXPos) && (frogYPos < car3CYPos + 20) && (frogYPos + 18 > car3CYPos)){
		numLives += -1;
	}
	if ((frogXPos < car4AXPos + 48) && (frogXPos + 23 > car4AXPos) && (frogYPos < car4AYPos + 18) && (frogYPos + 18 > car4AYPos)){
		numLives += -1;
	}
	if ((frogXPos < car4BXPos + 28) && (frogXPos + 23 > car4BXPos) && (frogYPos < car4BYPos + 20) && (frogYPos + 18 > car4BYPos)){
		numLives += -1;
	}
	if ((frogXPos < car4CXPos + 48) && (frogXPos + 23 > car4CXPos) && (frogYPos < car4CYPos + 18) && (frogYPos + 18 > car4CYPos)){
		numLives += -1;
	}
	if ((frogXPos < car5AXPos + 24) && (frogXPos + 23 > car5AXPos) && (frogYPos < car5AYPos + 26) && (frogYPos + 18 > car5AYPos)){
		numLives += -1;
	}
	if ((frogXPos < car5BXPos + 24) && (frogXPos + 23 > car5BXPos) && (frogYPos < car5BYPos + 24) && (frogYPos + 18 > car5BYPos)){
		numLives += -1;
	}
}

function draw_pieces(){
	ctx.font="bold 14px sans-serif";
	ctx.fillStyle="Lime";
	ctx.fillText("Score: ", 4, 557);
	ctx.fillText(score, 54, 557);
	ctx.fillText("Highscore: ", 84, 557);
	ctx.fillText(highScore, 166, 557);
	ctx.font="bold 20px sans-serif";
	ctx.fillText("Level ", 68, 540);
	ctx.fillText(level, 130, 540);
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
		ctx.drawImage(img, 12, 369, 23, 18, frogXPos, frogYPos, 23, 18);			// frog piece
	};
	img.src='assets/frogger_sprites.png';
}

// get user key input
function userKey(event){
	oldFrogX = frogXPos;
	oldFrogY = frogYPos;
	
	switch(event.keyCode){
	// left arrow
	case 37:
		frogXPos += -35;
		break;
	// right arrow
	case 39:
		frogXPos += 35;
		break;
	// down arrow
	case 40:
		frogYPos += 35;
		break;
	// up arrow
	case 38:
		frogYPos += -35;
		score += 10;
		break;
	}
}

// initialize parameters for game [e.g.: location of frog, cars, log]
function set_up(){
	score = 0;
	highScore = 0;
	level = 1;
	numLives = 3;
	numSuccess = 0;
	frogXPos = 190;
	frogYPos = 500;
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
	car1AXPos = 24;
	car1AYPos = 319;
	car1BXPos = 300;
	car1BYPos = 319;
	car2AXPos = 20;
	car2AYPos = 353;
	car2BXPos = 170;
	car2BYPos = 353;
	car2CXPos = 320;
	car2CYPos = 353;
	car3AXPos = 10;
	car3AYPos = 387;
	car3BXPos = 170;
	car3BYPos = 387;
	car3CXPos = 340;
	car3CYPos = 387;
	car4AXPos = 20;
	car4AYPos = 421;
	car4BXPos = 170;
	car4BYPos = 421;
	car4CXPos = 320;
	car4CYPos = 421;
	car5AXPos = 24;
	car5AYPos = 455;
	car5BXPos = 300;
	car5BYPos = 455;
}
