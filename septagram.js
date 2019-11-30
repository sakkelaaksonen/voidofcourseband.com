function drawStar(canvasId,cx,cy,spikes,outerRadius,innerRadius){
  
  var ctx=document.getElementById(canvasId).getContext("2d");;
  var rot=Math.PI/2*3;
  var x=cx;
  var y=cy;
  var step=Math.PI/spikes;

  ctx.beginPath();
  ctx.moveTo(cx,cy-outerRadius)
  for(i=0;i<spikes;i++){
    x=cx+Math.cos(rot)*outerRadius;
    y=cy+Math.sin(rot)*outerRadius;
    ctx.lineTo(x,y)
    rot+=step

    x=cx+Math.cos(rot)*innerRadius;
    y=cy+Math.sin(rot)*innerRadius;
    ctx.lineTo(x,y)
    rot+=step
  }
  ctx.lineTo(cx,cy-outerRadius);
  ctx.closePath();
  ctx.lineWidth=2;
  ctx.strokeStyle='white';
  ctx.stroke();
  ctx.fillStyle='white';
  ctx.fill();
}


window.addEventListener('DOMContentLoaded',(e)=>drawStar('septagra',100,100,7,30,20));
