var Aufgabe10;
(function (Aufgabe10) {
    class LittleFish {
        move() {
            this.x -= 3;
            this.y += 0;
            if (this.x < -200) {
                this.x = Aufgabe10.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Aufgabe10.crc2.canvas.height;
                this.x -= 3;
            }
        }
        draw() {
            Aufgabe10.crc2.fillStyle = "#682b2b";
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 25, this.y + 50, this.x + 80, this.y);
            Aufgabe10.crc2.lineTo(this.x + 110, this.y + 25);
            Aufgabe10.crc2.lineTo(this.x + 100, this.y);
            Aufgabe10.crc2.lineTo(this.x + 110, this.y - 25);
            Aufgabe10.crc2.lineTo(this.x + 80, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 25, this.y - 50, this.x, this.y);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.strokeStyle = "transparent";
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.LittleFish = LittleFish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=LittleFish.js.map