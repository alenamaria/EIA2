namespace Aufgabe11 {
    export class LittleFish extends MovingObjects {

        constructor() {
            super();
            this.setRandomPosition();
        }

        move(): void {
            this.x -= 3;
            this.y += 0;
            if (this.x < - 200) {
                this.x = crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height - 200;
                this.x -= 3;
            }
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height - 200;
        }

        draw(): void {
            crc2.fillStyle = "#682b2b";

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 25, this.y + 50, this.x + 80, this.y);
            crc2.lineTo(this.x + 110, this.y + 25);
            crc2.lineTo(this.x + 100, this.y);
            crc2.lineTo(this.x + 110, this.y - 25);
            crc2.lineTo(this.x + 80, this.y);
            crc2.quadraticCurveTo(this.x + 25, this.y - 50, this.x, this.y);
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
        }
    }
}