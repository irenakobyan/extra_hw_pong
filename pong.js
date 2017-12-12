const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx. canvas.width = 600 ;
ctx. canvas.height = 600;

const pong = new Image();
pong.src = "https://img00.deviantart.net/8261/i/2015/096/8/d/pong_logo_by_ringostarr39-d8opy2w.png";

const player2 = {
		x:10,
		y:100,
		width: 20,
		height: 70,
		yDelta: 30
	};

const player1 = {
		x:canvas.width-40,
		y:100,
		width: 20,
		height: 70,
		yDelta: 30
	};

const char = {
	x: canvas.width/2,
	y: canvas.height/2,
	r: 7,
	xDelta: 3,
	yDelta: 3

};

const score = {
  player1:0,
  player2:0,
};

const win = function(){
	if ( score.player2 === 10 || score.player1 === 10 ){
       alert("GAME OVER");

	}
};
	


  const draw = function(){
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

  	ctx.moveTo(canvas.width/2,100);
	ctx.lineTo(canvas.width/2,700);
	ctx.stroke();

	ctx.fillStyle="black";
	ctx.fillRect (player2.x, player2.y,player2.width, player2.height);

	ctx.fillStyle="black";
	ctx.fillRect (player1.x, player1.y,player1.width, player1.height);
  	
  	ctx.drawImage(pong, canvas.width/2-60, 0, 120, 60);

	ctx.beginPath();
  	ctx.arc(char.x,char.y,char.r, 0, 2*Math.PI, false);
	ctx.stroke();

	ctx.font ="50px Verdana";
  	ctx.fillStyle ="Red";
	ctx.fillText(score.player1,130,50);
  	ctx.fillText(score.player2,450,50);
  };


 const update=function(){
 char.x += char.xDelta;
 char.y += char.yDelta;

//bounce back when equal to height
if(char.y+char.r>=canvas.height || char.y+char.r<=0){
  char.yDelta = -char.yDelta;
}

//add score and begin again

else if (char.x+char.r <= 0){
	score.player2++;
	char.x = canvas.width/2;
	char.y = canvas.height/2;
}

// add score and begin again

else if(char.x+char.r>=canvas.width){
    score.player1++;
    char.x = canvas.width/2;
	char.y = canvas.height/2;
}

if(char.x+char.r<=player2.x+player2.width && char.x+ char.r< canvas.width && player2.y+ player2.height>=char.y-char.r  && player2.y<= char.y+char.r ){
  char.xDelta = -char.xDelta;
}

if(char.x+char.r>=player1.x  && player1.y<=char.y+char.r && player1.y+player1.height>= char.y-char.r){
   char.xDelta=-char.xDelta;
}

};

 const update1 = function(){

 	 if (player1.y<=0){
 	 	 player1.y = 0;
 	 }
 	 else if (player1.y>= canvas.height-player1.height){
 	 	player1.y = canvas.height-player1.height;
 	 }
 };

 const update2 = function(){
 	if (player2.y<=0){
 	 	player2.y = 0;
 	 }
 	 else if (player2.y>= canvas.height-player2.height){
 	 	player2.y = canvas.height-player2.height;
 	 }
 };



const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
const keyW = 87;
const keyS = 83;



document.addEventListener('keydown', function(event) {
	if(event.keyCode === keyS) {
		player2.y += player2.yDelta ;
       
  	}
}, false);

document.addEventListener('keyup', function(event) {
	if(event.keyCode === keyW) {
		player2.y -= player2.yDelta ;
       
  	}
}, false);

document.addEventListener('keydown', function(event) {
	if(event.keyCode === downKey) {
		player1.y += player1.yDelta ;
       
  	}
}, false);

document.addEventListener('keyup', function(event) {
	if(event.keyCode === upKey) {
		player1.y -= player1.yDelta  ;
       
  	}
}, false);



const loop = function(){


    draw();
    update();
	update1();
	update2();
	win();

   window.requestAnimationFrame(loop, canvas);
};
 window.requestAnimationFrame(loop, canvas);



