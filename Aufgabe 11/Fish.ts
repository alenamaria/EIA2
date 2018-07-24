namespace Aufgabe11 {
    export class Fish extends MovingObjects {

        constructor() {
            super();
            this.setRandomPosition();
        }

        move(): void {
            this.x -= 2;
            this.y += 0;
            if (this.x < - 200) {
                this.x = crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height - 200;
                this.x -= 2;
            }
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height - 200;    
        }

        draw(): void {
            let gradient: CanvasGradient = crc2.createLinearGradient(300, 550, 300, 500);
            gradient.addColorStop(0, "#10938d");
            gradient.addColorStop(1, "#57d1cb");

            crc2.fillStyle = gradient;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 45, this.y + 50, this.x + 100, this.y);
            crc2.lineTo(this.x + 130, this.y + 25);
            crc2.lineTo(this.x + 120, this.y);
            crc2.lineTo(this.x + 130, this.y - 25);
            crc2.lineTo(this.x + 100, this.y);
            crc2.quadraticCurveTo(this.x + 45, this.y - 50, this.x, this.y);

            crc2.strokeStyle = "transparent";
            crc2.stroke();
            crc2.fill();
        }
        
    }//class
}//namespace