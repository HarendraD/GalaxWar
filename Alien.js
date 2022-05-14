export default class Alien{
    constructor(x,y,number){
        this.x=x;
        this.y=y;
        this.width = 60;
        this.height = 50;

        this.image = new Image();
        this.image.src = 'images/alien'+number+'.png';
    }
    draw(ctx){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

}