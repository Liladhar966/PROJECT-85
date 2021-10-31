//Create a reference for canvas 
canvas = document.getElementById("My_Canvas");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
rover_width = 80;
rover_height = 180;
background_image = "parkinglot.jpg"
rover_image = "car2.png"
rover_x = 10
rover_y = 310
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
		//upload car, and background images on the canvas.

		background_img = new Image()
		background_img.onload = uploadBackground;
		background_img.src = background_image
		rover_img = new Image()
		rover_img.onload = uploadrover;
		rover_img.src = rover_image;
		
}
function uploadBackground() {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height)

}

function uploadrover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);

}
window.addEventListener("keydown", My_keydown)

function My_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}
function up() {
    if (rover_y>=0) {
        rover_y=rover_y-10;
        uploadBackground();
        uploadrover();
    }
}
function down() {
    if (rover_y<=500) {
        rover_y=rover_y+10;
        uploadBackground();
        uploadrover();
    }
}
function left() {
    if (rover_x>=0) {
        rover_x=rover_x-10;
        uploadBackground();
        uploadrover();
    }
}
function right() {
    if (rover_x<=700) {
        rover_x=rover_x+10;
        uploadBackground();
        uploadrover();
    }
}
