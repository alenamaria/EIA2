/*  Aufgabe: Abschlussaufgabe
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Dot;
(function (Dot_1) {
    class Dot extends Dot_1.SuperClass {
        // Konstruktor
        constructor() {
            super();
            // Deklarieren von Variablen
            this.newPositionX = 0;
            this.newPositionY = 0;
            this.gravity = 0.05;
            this.gravitySpeed = 0;
            this.setStartPosition();
            this.radius = 30;
        } // constructor
        // setStartPosition-Funktion - setzt den Startpunkt fest
        setStartPosition() {
            this.x = 125;
            this.y = 550;
        } // setStartPosition
        // draw-Funktion
        draw() {
            Dot_1.crc2.fillStyle = "#4c4c4c";
            Dot_1.crc2.beginPath();
            Dot_1.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            Dot_1.crc2.closePath();
            Dot_1.crc2.fill();
            Dot_1.crc2.strokeStyle = "transparent";
            Dot_1.crc2.stroke();
            //console.log(this.y);
        } // draw
        // setNewPosition-Funktion, unter anderem Aufruf der Funktionen "bottomBorder" und "topBorder"
        setNewPosition() {
            this.gravitySpeed += this.gravity;
            this.x += this.newPositionX;
            this.y += this.newPositionY + this.gravitySpeed;
            this.bottomBorder();
            this.topBorder();
        } // setNewPosition
        // bottomBorder-Funktion - untere Grenze, unter die der springende Punkt nicht gelangen kann
        bottomBorder() {
            let borderbottom = 530;
            if (this.y > borderbottom) {
                this.y = borderbottom;
                this.gravitySpeed = 0;
            }
        } // bottomBorder
        // topBorder-Funktion - obere Grenze, die der springende Punkt nicht �berschreiten darf
        topBorder() {
            let bordertop = 300;
            if (this.y < bordertop) {
                this.y = bordertop;
                this.gravitySpeed = 0;
            }
        } // topBorder
        // checkPosition-Funktion - �berpr�ft, ob der springende Punkt an der gleichen Position wie der Gegner ist
        checkPosition() {
            for (let i = 0; i < Dot_1.opponents.length; i++) {
                if (this.y <= Dot_1.opponents[i].y + 25 && this.y >= Dot_1.opponents[i].y - 25 && this.x <= Dot_1.opponents[i].x + 25 && this.x >= Dot_1.opponents[i].x - 25) {
                    // Alert-Box mit der Benachrichtigung "GAME OVER"
                    window.alert("GAME OVER");
                    if (window.alert) {
                        location.reload();
                    }
                    console.log("gameOver");
                }
            }
        } // checkPosition     
    }
    Dot_1.Dot = Dot; // class
})(Dot || (Dot = {})); // namespace
//# sourceMappingURL=Dot.js.map