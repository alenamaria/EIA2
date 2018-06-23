namespace Aufgabe10 {
    export class BubblesOne {
        x: number;
        y: number;
        radius: number;

        moveBubbles(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 450;
            }
        }

        drawBubbles(): void {
            crc2.fillStyle = "rgb(206, 220, 226, 0.6)";

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
        }
    }
    
    export class BubblesTwo {
        x: number;
        y: number;
        radius: number;

        moveBubbles(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 650;
            }    
        }

        drawBubbles(): void {
            crc2.fillStyle = "rgb(206, 220, 226, 0.6)";

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
        }
    }
    
    export class BubblesThree {
        x: number;
        y: number;
        radius: number;

        moveBubbles(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 650;
            }    
        }

        drawBubbles(): void {
            crc2.fillStyle = "rgb(206, 220, 226, 0.6)";

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
        }
    }
}