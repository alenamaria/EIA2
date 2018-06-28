var Aufgabe11;
(function (Aufgabe11) {
    class BubbleOne extends Aufgabe11.MovingObjects {
        constructor() {
            super();
            this.setRandomPosition();
        }
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 450;
            }
            //            if (this.y > 550) {
            //                this.y = 550;
            //            }
        }
        draw() {
            Aufgabe11.crc2.fillStyle = "rgb(206, 220, 226, 0.6)";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.strokeStyle = "transparent";
            Aufgabe11.crc2.stroke();
        }
        setRandomPosition() {
            this.x = Math.random() * (300 - 350) + 330;
            this.y = Math.random() * 450;
            this.radius = Math.random() * 8;
        }
    }
    Aufgabe11.BubbleOne = BubbleOne;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=BubbleOne.js.map