function start_game(){
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
			ctx.drawImage(img, 12, 369, 23, 18, 190, 495, 23, 18);	// frog piece
			ctx.drawImage(img, 13, 334, 18, 24, 4, 524, 14, 18);	// life1
			ctx.drawImage(img, 13, 334, 18, 24, 20, 524, 14, 18);	// life2
			ctx.drawImage(img, 13, 334, 18, 24, 36, 524, 14, 18);	// life3
		};
		img.src='assets/frogger_sprites.png';
	}
	else {
		alert('Sorry, canvas is not supported in your current browser.');
	}
}