var Aufgabe11;
(function (Aufgabe11) {
    class Flakes extends Aufgabe11.MovingObjects {
        constructor(newPositionX, newPositionY) {
            super();
            this.setRandomColor();
            this.x = newPositionX;
            this.y = newPositionY;
        }
        move() {
            this.x += 0;
            this.y += 1;
            if (this.y < 0) {
                this.y = 600;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.strokeStyle = "transparent";
            Aufgabe11.crc2.stroke();
        }
        setRandomColor() {
            let c = Math.floor(Math.random() * 3);
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
    Aufgabe11.Flakes = Flakes;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Flakes.js.map