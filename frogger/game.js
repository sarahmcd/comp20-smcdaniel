var canvas;
var ctx;
var img;
var score;
var highScore;
var level;
var frogXPos;
var frogYPos;
var logXPos;
var logYPos;
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
	car1XPos += 10;
	car2XPos += 10;
	car3XPos += 10;
	logXPos += 10;
	
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
	ctx.drawImage(img, 7, 198, 116, 21, logXPos, logYPos, 116, 21);				// log
	if (numLives >= 3) {ctx.drawImage(img, 13, 334, 18, 24, 36, 524, 14, 18);}	// life3
	if (numLives >= 2) {ctx.drawImage(img, 13, 334, 18, 24, 20, 524, 14, 18);}	// life2
	if (numLives >= 1) {ctx.drawImage(img, 13, 334, 18, 24, 4, 524, 14, 18);}	// life1
	ctx.drawImage(img, 82, 264, 24, 26, car1XPos, car1YPos, 24, 26);			// car1
	ctx.drawImage(img, 46, 265, 24, 24, car2XPos, car2YPos, 24, 24);			// car2
	ctx.drawImage(img, 106, 302, 48, 18, car3XPos, car3YPos, 48, 18);			// car3

}

// draw basic board for frogger game [most fundamental unchanging elements]
function draw_board(){
	canvas = document.getElementById('game');
	if (canvas.getContext){
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
		};
		img.src='assets/frogger_sprites.png';
	}
	else {
		alert('Sorry, canvas is not supported in your current browser.');
	}
//	set_up();
}

// initialize parameters for game [e.g.: location of frog, cars, log]
function set_up(){
	score = 0;
	highScore = 0;
	level = 1;
	frogXPos = 190;
	frogYPos = 495;
	logXPos = 240;
	logYPos = 136;
	numLives = 3;
	car1XPos = 120;
	car1YPos = 316;
	car2XPos = 312;
	car2YPos = 458;
	car3XPos = 96;
	car3YPos = 424;

//	start_game(score, highScore, level, frogXPos, frogYPos, logXPos, logYPos, numLives, car1XPos, car1YPos, car2XPos, car2YPos, car3XPos, car3YPos);
}

// set up board [frog, cars, log, etc.] for particular game using initialized parameters
//function start_game(score, highScore, level, frogXPos, frogYPos, logXPos, logYPos, numLives, car1XPos, car1YPos, car2XPos, car2YPos, car3XPos, car3YPos){
function start_game(){
	canvas = document.getElementById('game');
	if (canvas.getContext){
		ctx = canvas.getContext('2d');
		ctx.font="bold 14px sans-serif";
		ctx.fillStyle="Lime";
		ctx.fillText("Score: ", 4, 557);
		ctx.fillText(score, 54, 557);
		ctx.fillText("Highscore: ", 84, 557);
		ctx.fillText(highScore, 166, 557);
		ctx.font="bold 20px sans-serif";
		ctx.fillText("Level ", 68, 540);
		ctx.fillText(level, 130, 540);
		img = new Image();
		img.onload = function(){
			ctx.drawImage(img, 12, 369, 23, 18, frogXPos, frogYPos, 23, 18);			// frog piece
			ctx.drawImage(img, 7, 198, 116, 21, logXPos, logYPos, 116, 21);				// log
			if (numLives >= 3) {ctx.drawImage(img, 13, 334, 18, 24, 36, 524, 14, 18);}	// life3
			if (numLives >= 2) {ctx.drawImage(img, 13, 334, 18, 24, 20, 524, 14, 18);}	// life2
			if (numLives >= 1) {ctx.drawImage(img, 13, 334, 18, 24, 4, 524, 14, 18);}	// life1
			ctx.drawImage(img, 82, 264, 24, 26, car1XPos, car1YPos, 24, 26);			// car1
			ctx.drawImage(img, 46, 265, 24, 24, car2XPos, car2YPos, 24, 24);			// car2
			ctx.drawImage(img, 106, 302, 48, 18, car3XPos, car3YPos, 48, 18);			// car3
		};
		img.src='assets/frogger_sprites.png';
	}
	else {
		alert('Sorry, canvas is not supported in your current browser.');
	}
}