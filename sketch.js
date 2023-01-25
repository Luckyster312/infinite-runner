var characterImg,character
var backImg,back
var bulletImg,bullet


function preload(){
 backImg=loadImage("back.png")
characterImg=loadImage("character.png")
bulletImg=loadImage("bullet.png")
}

function setup() {
createCanvas(600,600)

bulletsGroup=new Group()
back=createSprite(300,300,600,600)
back.addImage(backImg)
back.scale=2

character=createSprite(40,300,50,50)
character.addImage(characterImg)
character.scale=0.3





}

function draw() {
background("black")



if(back.x<0){
    back.x=300


}
if(keyDown("space")){
    character.velocityY=-5
    

}
 
character.velocityY+=0.5

character.x=mouseX
character.y=mouseY
back.velocityX=-02

 spawnBullets()
 if(character.isTouching(bulletsGroup)){
    character.destroy()
 }
drawSprites()
}

function spawnBullets(){
    if(frameCount%60===0){
 bullet=createSprite(500,500,50,50)
 bullet.addImage(bulletImg)
 bullet.velocityX=-10
 bullet.scale=0.4
bullet.y=random(100,500)
bulletsGroup.add(bullet)
    }
}