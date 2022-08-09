tint_color="";
function setup(){
    canvas=createCanvas(600, 400);
    canvas.position(100, 300);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,400);
    tint(tint_color);
}

function filter_tint(){
    tint_color=document.getElementById("filterColor").value;
}

function take_snapshot(){
    save("colored_image.png");
}