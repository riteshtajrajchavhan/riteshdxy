class Bird{
    constructor(x,y){
        this.body=createSprite(x,y);
        this.body.addAnimation("running",birdImg);
        this.body.scale=0;
    }
}