/*  Aufgabe: Abschlussaufgabe
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Dot;
(function (Dot) {
    class Triangle extends Dot.Square {
        // Konstruktor
        constructor() {
            super();
            this.setRandomColor();
        } // constructor
        // draw-Funktion
        draw() {
            Dot.crc2.fillStyle = this.color;
            Dot.crc2.beginPath();
            Dot.crc2.moveTo(this.x, this.y);
            Dot.crc2.lineTo(this.x + 28, this.y - 50);
            Dot.crc2.lineTo(this.x + 56, this.y);
            Dot.crc2.closePath();
            Dot.crc2.fill();
            Dot.crc2.strokeStyle = "transparent";
            Dot.crc2.stroke();
        } // draw
        // setRandomColor-Funktion - zuf�llige Farbe der Dreiecke
        setRandomColor() {
            let c = Math.floor(Math.random() * 3);
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
    }
    Dot.Triangle = Triangle; // class   
})(Dot || (Dot = {})); // namespace
//# sourceMappingURL=Triangle.js.map