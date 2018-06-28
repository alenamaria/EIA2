namespace Aufgabe11 {
    export class Flake extends MovingObjects {
        radius: number;
        color: string;
        stop: number;

        constructor(newPositionX: number, newPositionY: number) {
            super();
            this.setRandomColor();
            this.x = newPositionX;
            this.y = newPositionY;
            this.radius = 3;
            this.stop = Math.random() * (670 - 600) + 600;
        }

        move(): void {
            this.x += 0;
            this.y += 1;

            if (this.y > this.stop) {
                this.y = this.stop;
            }
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
        }

        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#d8a6a0";
                    break;
                case 1:
                    this.color = "#c3e5c4";
                    break;
                case 2:
                    this.color = "#ad3737";
            }
        }



    }
}