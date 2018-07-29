/*  Aufgabe: Abschlussaufgabe
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Dot;
(function (Dot) {
    class Square extends Dot.SuperClass {
        // Konstruktor
        constructor() {
            super();
            this.setRandomColor();
            this.setRandomSpawnPoint();
        } // constructor
        // chekcPositionSquare-Funktion
        checkPositionSquare() {
            if (this.x < -50) {
                this.setRandomSpawnPoint();
                this.setRandomColor();
            }
        } // checkPositionSquare
        // draw-Funktion
        draw() {
            Dot.crc2.fillStyle = this.color;
            Dot.crc2.beginPath();
            Dot.crc2.moveTo(this.x, this.y);
            Dot.crc2.lineTo(this.x, this.y + 50);
            Dot.crc2.lineTo(this.x + 50, this.y + 50);
            Dot.crc2.lineTo(this.x + 50, this.y);
            Dot.crc2.closePath();
            Dot.crc2.fill();
            Dot.crc2.strokeStyle = "transparent";
            Dot.crc2.stroke();
            //console.log(this.y);
        } // draw
        // Move-Funktion
        move() {
            this.x -= 1;
        } // move
        // setRandomSpawnPoint-Funktion - setzt eine random Reihenfolge au�erhalb des Canvas fest, in der sie dann im Canvas sichtbar sind
        setRandomSpawnPoint() {
            this.x = Math.random() * ((Dot.crc2.canvas.width + 1000) - (Dot.crc2.canvas.width)) + (Dot.crc2.canvas.width);
            this.y = 510;
        } // setRandomSpawnPoint
        // setRandomColor-Funktion - zuf�llige Farbe der Vierecke
        setRandomColor() {
            let c = Math.floor(Math.random() * 3);
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
    }
    Dot.Square = Square; // class   
})(Dot || (Dot = {})); // namespace
//# sourceMappingURL=Square.js.map