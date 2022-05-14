import AlienController from "./AlienControl.js";


var canvas=document.getElementById("game");
var ctx=canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 600;

var background = new Image();
background.src="images/space.png";
console.log(background);

var alienController = new AlienController(canvas);


function game(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    alienController.draw(ctx);
}

setInterval(game,1000/60);
