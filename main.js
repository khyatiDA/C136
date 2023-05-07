leftWrist = 0;
rightWrist =0;
difference = 0;

function setup(){
    canvas = createCanvas(500,550)  
    canvas.position(650,100)
  
    video = createCapture(VIDEO)
    video.size(500,500)
  
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
  }

  
  
  
  function modelLoaded(){
      console.log("PoseNet has been loaded")
  
    
  }

  function gotPoses(results){
    if (results.length > 0) {
        console.log(results)
        
        rightWrist =results[0].pose.rightWrist.x;
     leftWrist =results[0].pose.leftWrist.x;

     difference = floor(rightWrist - leftWrist)
     }
  }
  

  function draw(){
    background("white")
    textSize(rightWrist , leftWrist , difference)
    fill("#FF007F")
    text('Khyati',60,300)
   
  }