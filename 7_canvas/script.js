let canvas = document.getElementById ("canvas");
let ctx = canvas.getContext ("2d");

ctx.fillStyle="pink";
ctx.fillRect(0,0,180,180);

ctx.fillStyle="blue";
ctx.fillRect=(320,240,200,300);

ctx.fillStyle= "rgb(0 255 0 / 50%";
ctx.fillRect= (420, 240, 100, 100);

console.log("canvas");