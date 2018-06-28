var Aufgabe11;
(function (Aufgabe11) {
    class LittleFish extends Aufgabe11.MovingObjects {
        constructor() {
            super();
        }
        move() {
            this.x -= 3;
            this.y += 0;
            if (this.x < -200) {
                this.x = Aufgabe11.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Aufgabe11.crc2.canvas.height;
                this.x -= 3;
            }
        }
        draw() {
            Aufgabe11.crc2.fillStyle = "#682b2b";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 25, this.y + 50, this.x + 80, this.y);
            Aufgabe11.crc2.lineTo(this.x + 110, this.y + 25);
            Aufgabe11.crc2.lineTo(this.x + 100, this.y);
            Aufgabe11.crc2.lineTo(this.x + 110, this.y - 25);
            Aufgabe11.crc2.lineTo(this.x + 80, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 25, this.y - 50, this.x, this.y);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.strokeStyle = "transparent";
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.LittleFish = LittleFish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=LittleFish.js.map