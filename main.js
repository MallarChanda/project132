img = "";
status = "";

function preload() {
img = loadImage('hi.webp');    
}

function setup() {
canvas = createCanvas(640,420);
canvas.center(); 
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
console.log("Model Loaded!");
status = true;
objectDetector.detect(img,gotresults);   
}

function gotresults(error,results) {
if (error) {
console.error(error);    
}else {
console.log(results);
}    
}

function draw() {
image(img,0,0,640,420);
fill("#FF0000");
text("laptop",165,95);
noFill();
stroke("#FF0000");
rect(160,80,320,300);

fill("#FF0000");
text("plant",5,148);
noFill();
stroke("#FF0000");
rect(3,150,150,200);

fill("#FF0000");
text("mouse",552,315);
noFill();
stroke("#FF0000");
rect(550,320,100,50);
}