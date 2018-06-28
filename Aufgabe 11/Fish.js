var Aufgabe11;
(function (Aufgabe11) {
    class Fish extends Aufgabe11.MovingObjects {
        constructor() {
            super();
            this.setRandomPosition();
        }
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -200) {
                this.x = Aufgabe11.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Aufgabe11.crc2.canvas.height - 200;
                this.x -= 2;
            }
        }
        setRandomPosition() {
            this.x = Math.random() * Aufgabe11.crc2.canvas.width;
            this.y = Math.random() * Aufgabe11.crc2.canvas.height - 200;
        }
        draw() {
            let gradient = Aufgabe11.crc2.createLinearGradient(300, 550, 300, 500);
            gradient.addColorStop(0, "#10938d");
            gradient.addColorStop(1, "#57d1cb");
            Aufgabe11.crc2.fillStyle = gradient;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 45, this.y + 50, this.x + 100, this.y);
            Aufgabe11.crc2.lineTo(this.x + 130, this.y + 25);
            Aufgabe11.crc2.lineTo(this.x + 120, this.y);
            Aufgabe11.crc2.lineTo(this.x + 130, this.y - 25);
            Aufgabe11.crc2.lineTo(this.x + 100, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 45, this.y - 50, this.x, this.y);
            Aufgabe11.crc2.strokeStyle = "transparent";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Fish = Fish; //class
})(Aufgabe11 || (Aufgabe11 = {})); //namespace
//# sourceMappingURL=Fish.js.map