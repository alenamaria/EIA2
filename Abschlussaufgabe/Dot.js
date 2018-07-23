/*  Aufgabe: Aufgabe 9: Canvas - Seaworld
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 17.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Dot;
(function (Dot_1) {
    class Dot extends Dot_1.SuperClass {
        constructor() {
            super();
            this.radius = 30;
            this.setStartPosition();
            //            this.x = newPositionX;
            //            this.y = newPositionY;
        }
        setStartPosition() {
            this.x = 125;
            this.y = 550;
        }
        draw() {
            Dot_1.crc2.fillStyle = "#4c4c4c";
            Dot_1.crc2.beginPath();
            Dot_1.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            Dot_1.crc2.closePath();
            Dot_1.crc2.fill();
            Dot_1.crc2.strokeStyle = "transparent";
            Dot_1.crc2.stroke();
            console.log("Dot");
        }
        move() {
            this.x += 0;
            this.y -= 0;
        }
    }
    Dot_1.Dot = Dot;
})(Dot || (Dot = {}));
//# sourceMappingURL=Dot.js.map