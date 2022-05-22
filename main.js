song = "";
song1 = "";
song2 = "";

leftWrisY = "";
leftWristX = "";

rightWristY = "";
rightWristX = "";


function preload()
{
	song = loadSound("music.mp3");
	song = loadSound("music2.mp3")
}


function setup() {
     canvas =  createCanvas(600, 500);
     canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function modelLoaded(){
    console.log("PoseNet is Intialized");
}

function play(){
	song.play();
	song.setVolume(1);
	song.rate(1);
    
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist X = " + leftWristX + " left wrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist X = " + rightWristX + " right wrist Y = " + rightWristY);

    }
}

