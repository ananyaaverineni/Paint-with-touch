mouseEvent="empty";
var last_position_of_x,last_position_of_y
canvas=document.getElementById('myCanvas')
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
  
canvas.addEventListener("mousedown",my_mousedown )
function my_mousedown (e){
    mouseEvent="mousedown" 
    color=document.getElementById ("color1").value
 width_of_line=document.getElementById ("width_of_line_1").value  
}
canvas.addEventListener("mouseup",my_mouseup )
function my_mouseup (e){
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave )
function my_mouseleave (e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",draw_arc);
function draw_arc (e)
{current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
 current_position_of_mouse_y = e.clientY - canvas.offsetTop;
 if (mouseEvent=="mousedown")
{
 ctx.beginPath()
 ctx.strokeStyle=color;``
 ctx.lineWidth=width_of_line;
 ctx.moveTo(last_position_of_x,last_position_of_y)   
 ctx.lineTo (current_position_of_mouse_x,current_position_of_mouse_y)
 ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x
last_position_of_y=current_position_of_mouse_y
}
function clear1() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
//paint with touch code

var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;

if(width<992) {canvas.width=newwidth;

 canvas.height=newheight;
// document.body.style.overflow="hidden";
}
 canvas.addEventListener("touchstart",my_touchstart);
 function my_touchstart(e){
 color=document.getElementById ("color1").value
 width_of_line=document.getElementById ("width_of_line_1").value      
 last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
 last_position_of_y = e.touches[0].clientY - canvas.offsetTop;}

canvas.addEventListener("touchmove",draw_when_touch);
function draw_when_touch (e){
    var current_position_of_touch_x=e.touches[0].clientX - canvas.offsetLeft;
    var current_position_of_touch_y=e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath()
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_position_of_x,last_position_of_y)   
    ctx.lineTo (current_position_of_touch_x,current_position_of_touch_y)
    ctx.stroke();
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;

}