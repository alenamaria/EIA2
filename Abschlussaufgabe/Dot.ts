/*  Aufgabe: Abschlussaufgabe
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Dot {
    export class Dot extends SuperClass {

        // Deklarieren von Variablen
        newPositionX: number = 0;
        newPositionY: number = 0;
        gravity: number = 0.05;
        gravitySpeed: number = 0;
        radius: number;

        // Konstruktor
        constructor() {
            super();
            this.setStartPosition();
            this.radius = 30;
        } // constructor

        // setStartPosition-Funktion - setzt den Startpunkt fest
        setStartPosition(): void {
            this.x = 125;
            this.y = 550;
        } // setStartPosition

        // draw-Funktion
        draw(): void {

            crc2.fillStyle = "#4c4c4c";

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();

            for (let i: number = 0; i < opponents.length; i++) {
                if (crc2.isPointInPath(opponents[i].x + 50, opponents[i].y) || crc2.isPointInPath(opponents[i].x, opponents[i].y)) {
                    window.alert("GAME OVER");
                    if (window.alert) {
                        location.reload();
                    }
                }
            }

            //console.log(this.y);
        } // draw

        // setNewPosition-Funktion, unter anderem Aufruf der Funktionen "bottomBorder" und "topBorder"
        setNewPosition(): void {
            this.gravitySpeed += this.gravity;
            this.x += this.newPositionX;
            this.y += this.newPositionY + this.gravitySpeed;
            this.bottomBorder();
            this.topBorder();
        } // setNewPosition

        // bottomBorder-Funktion - untere Grenze, unter die der springende Punkt nicht gelangen kann
        bottomBorder(): void {
            let borderbottom: number = 530;
            if (this.y > borderbottom) {
                this.y = borderbottom;
                this.gravitySpeed = 0;
            }
        } // bottomBorder

        // topBorder-Funktion - obere Grenze, die der springende Punkt nicht überschreiten darf
        topBorder(): void {
            let bordertop: number = 300;
            if (this.y < bordertop) {
                this.y = bordertop;
                this.gravitySpeed = 0;
            }
        } // topBorder
    } // class
} // namespace