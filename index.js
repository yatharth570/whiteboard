const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');
var select = document.getElementById('colorpicker');
var color=select.value;
let isDrawing=false;
let draw=false;
let x=0;
let y=0;
window.onload=(e)=>{
  color = select.value;
  document.getElementById('h1').innerHTML=color;
  drawl(color,2);
}
select.addEventListener('change', () => {
  draw=true;
  document.getElementById('circularc').style.visibility="hidden";
  color = select.value;
  document.getElementById('h1').innerHTML=color;
  drawl(color,2);
})

function drawl(color,width){
  myPics.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    context.fillStyle=color;
  });


myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY,color,width);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY,color,width);
    x = 0;
    y = 0;
    isDrawing = false;
    color=""
    width=""
  }
});
}

function drawLine(context, x1, y1, x2, y2,color,width) {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = width;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}

function erase(){
  draw=false;
  myPics.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    context.fillStyle="white";
  });


myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY,"white",20);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY,"white",20);
    x = 0;
    y = 0;
    isDrawing = false;
    color=""
    width=""
  }
});

  myPics.addEventListener("mousemove",e=>{
    if(draw==false){
    document.getElementById('circularc').style.visibility="visible";
    document.getElementById('circularc').style.marginLeft=e.pageX-13+"px";
    document.getElementById('circularc').style.marginTop=e.pageY-23+"px";
}
  })
}