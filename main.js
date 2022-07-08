noseX=0; noseY=0; lWx=0; rWx=0;
difference =0;

function setup(){

    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    document.getElementById("SquareSide").innerHTML ="The Size Of The Square Is:- " + difference;
    background("#00E7FF");
    fill("#023047")
    stroke("red")
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("PoseNet Has Been Loaded Successfully");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        lWx= results[0].pose.leftWrist.x;
        rWx= results[0].pose.rightWrist.x;
        console.log(noseX, noseY);
        difference = floor(lWx - rWx);
    }

}


