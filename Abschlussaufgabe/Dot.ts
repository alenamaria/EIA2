/*  Aufgabe: Aufgabe 9: Canvas - Seaworld
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 17.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Dot {
    export class Dot extends SuperClass {
        
        radius: number = 30;
        
        constructor(/*newPositionX: number, newPositionY: number*/) {
            super();  
            this.setStartPosition(); 
//            this.x = newPositionX;
//            this.y = newPositionY;
        }
        
        setStartPosition(): void {
            this.x = 125;
            this.y = 550;
        }
        
        draw(): void {    
            
            crc2.fillStyle = "#4c4c4c";
            
            crc2.beginPath();  
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();  
            
            crc2.strokeStyle = "transparent";
            crc2.stroke();
            
            console.log("Dot");
        }
        
        move(): void {
            this.x += 0;
            this.y -= 0;
        } 
    }
}