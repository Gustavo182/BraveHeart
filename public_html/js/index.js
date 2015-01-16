$(document).on("ready",configurarApp);

function configurarApp ()
{
    var canvas = document.getElementById("miCanvas");
    var ctx = canvas.getContext("2d");
    canvas.widht = screen.availWidth;
    dibujaFooter(canvas,ctx);
    
}
function dibujaFooter(canvas,contexto)
{
    contexto.fillStyle = "rgba(0,0,0,0.8)";
    contexto.moveTo(0,0);
    contexto.quadraticCurveTo(20,0,canvas.width,canvas.height);
    contexto.stroke();
    
    //quadraticCurveTo(cpx,cpy,x,y)
}


