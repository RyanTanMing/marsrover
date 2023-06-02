canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
rover_width=100
rover_height=90
rover_x=10
rover_y=10
bg_img="mars.jpg"
rover_img="rover.png"
Array1=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"]
var r=Math.floor(Math.random()*4)
bg_img=Array1[r]
function add() {
    bg_img_tag=new Image()
    bg_img_tag.onload=uploadBackground
    bg_img_tag.src=bg_img
    rover_img_tag=new Image()
    rover_img_tag.onload=uploadRover
    rover_img_tag.src=rover_img
}
function uploadBackground() {
    ctx.drawImage(bg_img_tag,0,0,canvas.width,canvas.height)
}
function uploadRover() {
    ctx.drawImage(rover_img_tag,rover_x,rover_y
        ,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e) {
    keypressed=e.keyCode
    console.log(keypressed)
    if (keypressed=="38") {
        up()
        console.log("up")
    }
    if (keypressed=="40") {
        down()
        console.log("down")
    }
    if (keypressed=="37") {
        left()
        console.log("left")
    }
    if (keypressed=="39") {
        right()
        console.log("right")
    }
}
function up() {
    if (rover_y>=0) {
        rover_y=rover_y-10
        uploadBackground()
        uploadRover()
    }
}
function down() {
    if (rover_y<=550) {
        rover_y=rover_y+10
        uploadBackground()
        uploadRover()
    }
}
function left() {
    if (rover_x>=0) {
        rover_x=rover_x-10
        uploadBackground()
        uploadRover()
    }
}
function right() {
    if (rover_x<=700) {
        rover_x=rover_x+10
        uploadBackground()
        uploadRover()
    }
}
