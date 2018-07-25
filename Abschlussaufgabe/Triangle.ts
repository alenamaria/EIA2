/*  Aufgabe: Abschlussaufgabe
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Dot {
    export class Triangle extends Square {

        // Konstruktor
        constructor() {
            super();
            this.setRandomColor();
        } // constructor

        // draw-Funktion
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 28, this.y - 50);
            crc2.lineTo(this.x + 56, this.y);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
        } // draw
        
         // setRandomSpawnPoint-Funktion - setzt eine random Reihenfolge auﬂerhalb des Canvas fest, in der sie dann im Canvas sichtbar sind
        setRandomSpawnPoint(): void {
            this.x = Math.random() * ((crc2.canvas.width + 700) - (crc2.canvas.width)) + (crc2.canvas.width);
            this.y = 400;
        } // setRandomSpawnPoint

        // setRandomColor-Funktion - zuf‰llige Farbe der Dreiecke
        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#81871c";
                    break;
                case 1:
                    this.color = "#80648c";
                    break;
                case 2:
                    this.color = "#e5e042";
            } // switch   
        } // setRandomColor
    } // class   
} // namespace