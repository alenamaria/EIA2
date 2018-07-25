/*  Aufgabe: Abschlussaufgabe
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Dot {
    export class Square extends Dot {
        color: string;

        constructor() {
            super();
            this.setRandomColor();
            this.setRandomSpawnPoint();
        } // constructor

        // draw-Funktion
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 50);
            crc2.lineTo(this.x + 50, this.y + 50);
            crc2.lineTo(this.x + 50, this.y);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
            
            //console.log(this.y);
        } // draw

        // Move-Funktion
        move(): void {
            this.x -= 1;
            this.y += 0;

            if (this.x < -50) {
                this.x = canvas.width;
            }
        } // move

        // setRandomSpawnPoint-Funktion - setzt eine random Reihenfolge außerhalb des Canvas fest, in der sie dann im Canvas sichtbar sind
        setRandomSpawnPoint(): void {
            this.x = Math.random() * ((crc2.canvas.width + 700) - (crc2.canvas.width)) + (crc2.canvas.width);
            this.y = 510;
        } // setRandomSpawnPoint

        // setRandomColor-Funktion - zufällige Farbe der Vierecke
        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#f9b836";
                    break;
                case 1:
                    this.color = "#b2cc4d";
                    break;
                case 2:
                    this.color = "#b7505e";
            } // switch   
        } // setRandomColor
    } // class   
} // namespace