var drawCanvas, emptyCanvas, addCanvas;

drawCanvas = function(){
    var text = document.getElementById('content').value,
        i;

    emptyCanvas();
    for(i = 0;i < text.length; i++){
        addCanvas(text.charAt(i));
    }
};

emptyCanvas = function(){
    var element = document.getElementById("group"),
        _canvas = element.childNodes,
        i ;
    for(i = 0; i < _canvas.length; i++){
        element.removeChild(_canvas[i]);
    }
};

addCanvas = function(text){
    var element = document.getElementById("group"),
        canvas = document.createElement("canvas");
    element.appendChild(canvas);
    canvas.style.width = "100px";
    canvas.style.height = "100px";
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        ctx.font = "128px sans-serif";
        ctx.fillStyle = getRandomColor();
        ctx.fillText(text, 80, 120);
    }
};

function getRandomColor(){
    return "#"+("00000"+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
}