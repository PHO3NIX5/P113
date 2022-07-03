function preload(){
}

function setup() {
    canvas = createCanvas(750,650);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,40,40,500,450);

    
    stroke(50, 168, 82);
    fill(50, 168, 82);


    rect(63, 27, 500, 25);
    rect(63, 490, 500, 25);
    rect(27, 63, 25, 415);
    rect(540, 63, 25, 415);

    stroke(168, 10, 10);
    fill(168, 10, 10);

    circle(40,40,50);
    circle(550,40,50);
    circle(40,500,50);
    circle(550,500,50);
  
}

function take_snapshot(){
    save("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE.png");
}