//Handtracking
const video = document.getElementById("myvideo");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let trackButton = document.getElementById("trackbutton");
let updateNote = document.getElementById("updatenote");


// Test Rolladenvideo
var rolladenvideo = document.getElementById("rolladen");
rolladenvideo.muted = true;


//Webcam
function disableAutoplay() { 
  vid.autoplay = false;
  vid.load();
} 

function checkAutoplay() { 
  alert(vid.autoplay);
} 

let isVideo = false;
let model = null;

let audioInited = false;

const modelParams = {
  flipHorizontal: true, // flip e.g for video
  maxNumBoxes: 20, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.6, // confidence threshold for predictions.
};

function startVideo() {
  handTrack.startVideo(video).then(function (status) {
    console.log("video started", status);
    if (status) {
      updateNote.innerText = "Video started. Now tracking";
      isVideo = true;
      runDetection();
    } else {
      updateNote.innerText = "Please enable video";
    }
  });
}

function toggleVideo() {
  audioInited = true;
  if (!isVideo) {
    updateNote.innerText = "Starting video";
    startVideo();
  } else {
    updateNote.innerText = "Stopping video";
    handTrack.stopVideo(video);
    isVideo = false;
    updateNote.innerText = "Video stopped";
  }
}


// Hier Änderungen
function runDetection() {
  model.detect(video).then((predictions) => {
    //console.log("Predictions: ", predictions);
    predictions.forEach(element => {
      //console.log(element.label, element.score)
      if(element.label == "open"){
        //hier kommt die Interaktion wenn die Geste open ist
        rolladenvideo.play();
        // Länge des Videos
        if (rolladenvideo.currentTime == 11) {
          rolladenvideo.pause();
          console.log("Rolladen ist an der Oberkante angekommen");
        }
        console.log("Rolladen wird geöffnet");
      }
      if(element.label == "closed"){
        //hier kommt die Interaktion wenn die Geste closed ist
        rolladenvideo.pause();
        console.log("Rolladen hält Position");
      }
      if(element.label == "point"){
        //hier kommt die Interaktion wenn die Geste point ist
        rolladenvideo.currentTime = rolladenvideo.currentTime -0.1;
        console.log("Rolladen wird geschlossen");
        if (rolladenvideo.currentTime ==  0) {
          rolladenvideo.pause();
          console.log("Rolladen ist an der Unterkante angekommen");
        }
      }
    });
    model.renderPredictions(predictions, canvas, context, video);
    if (isVideo) {
      requestAnimationFrame(runDetection);
    }
  });
}


// Load the model.
handTrack.load(modelParams).then((lmodel) => {
  // detect objects in the image.
  model = lmodel;
  updateNote.innerText = "Loaded Model!";
  trackButton.disabled = false;
});
