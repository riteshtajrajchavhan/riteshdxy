class Ground {
    constructor(x,y,scale){
        this.ground=createSprite(x,y);
        this.ground.addImage(groundImg);
        this.ground.scale=scale;

        this.collider=createSprite(x);
        this.collider.y=this.ground.y+2;
        this.collider.addImage(groundImg)
        this.collider.scale=scale;
        this.collider.visible=false;
       

    }

display(){
   
    player.collide(this.collider);
    

   if (keyDown(UP_ARROW) && player.isTouching(this.ground)) {
        player.velocityY=player.velocityY-28;
     }  

     if (j.isHeld){
        if (player.isTouching(this.ground)) {
            player.velocityY=player.velocityY-28;
         }   
     }

       
if(player.isTouching(this.ground)){
    camera.y=this.ground.y-220;
    health.y=this.ground.y-470;
}


}
}