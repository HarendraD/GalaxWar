import Alien from "./Alien.js";

export default class AlienControl{
    alienMap = [
        [0,1,0,2,0,1,0,2,0],
        [1,0,2,0,1,0,2,0,1],
        [0,1,0,2,0,2,0,1,0],
        [1,0,1,0,2,0,2,0,1],
        [0,1,0,1,0,2,0,2,0],
    ];
    alienRows = [];



    constructor(canvas){
        this.canvas=canvas;
        this.createAlien();
    }

    draw(ctx){
      this.drawAliens(ctx);
    }

    drawAliens(ctx){
        this.alienRows.flat().forEach((alien)=>{
            alien.draw(ctx);
        }
        );
    }

    createAlien(){
        this.alienMap.forEach((row, index) => {
            this.alienRows[index] = [];
            row.forEach((number, alienIndex) =>{
                if(number > 0){
                    this.alienRows[index].push(
                        new Alien (alienIndex * 60, index * 40, number)
                        
                   )
                        
                }


            });

        });
    }
}