function draw(){
	canvas = document.getElementById('simple');
	if (canvas.getContext){
		ctx = canvas.getContext('2d');
		img = new Image();
		img.onload = function(){
			ctx.drawImage(img, 322, 2, 464, 135, 0, 0, 464, 135);
			ctx.drawImage(img, 2, 82, 16, 16, 42, 93, 16, 16);
			ctx.drawImage(img, 82, 22, 15, 16, 280, 51, 15, 16);
		};
		img.src='pacman10-hp-sprite.png';
	}
	else {
		alert('Sorry, canvas is not supported on your current browser.');
	}
}