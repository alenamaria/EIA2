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

        // topBorder-Funktion - obere Grenze, die der springende Punkt nicht �berschreiten darf
        topBorder(): void {
            let bordertop: number = 300;
            if (this.y < bordertop) {
                this.y = bordertop;
                this.gravitySpeed = 0;
            }
        } // topBorder

        // checkPosition-Funktion - �berpr�ft, ob der springende Punkt an der gleichen Position wie der Gegner ist
        checkPosition(): void {
            for (let i: number = 0; i < opponents.length; i++) {
                if (this.y <= opponents[i].y + 25 && this.y >= opponents[i].y - 25 && this.x <= opponents[i].x + 25 && this.x >= opponents[i]. x - 25) {
                    
                    // Alert-Box mit der Benachrichtigung "GAME OVER"
                    window.alert("GAME OVER");
                    
                    if (window.alert) {
                        location.reload();    
                    }
                }
            }
        } // checkPosition     
    } // class
} // namespace