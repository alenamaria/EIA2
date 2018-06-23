var Aufgabe10;
(function (Aufgabe10) {
    class Fish {
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -200) {
                this.x = Aufgabe10.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Aufgabe10.crc2.canvas.height;
                this.x -= 2;
            }
        }
        draw() {
            let gradient = Aufgabe10.crc2.createLinearGradient(300, 550, 300, 500);
            gradient.addColorStop(0, "#10938d");
            gradient.addColorStop(1, "#57d1cb");
            Aufgabe10.crc2.fillStyle = gradient;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 45, this.y + 50, this.x + 100, this.y);
            Aufgabe10.crc2.lineTo(this.x + 130, this.y + 25);
            Aufgabe10.crc2.lineTo(this.x + 120, this.y);
            Aufgabe10.crc2.lineTo(this.x + 130, this.y - 25);
            Aufgabe10.crc2.lineTo(this.x + 100, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 45, this.y - 50, this.x, this.y);
            Aufgabe10.crc2.strokeStyle = "transparent";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.Fish = Fish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=drawFish.js.map