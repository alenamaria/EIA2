var Aufgabe10;
(function (Aufgabe10) {
    class BubblesOne {
        moveBubbles() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 450;
            }
        }
        drawBubbles() {
            Aufgabe10.crc2.fillStyle = "rgb(206, 220, 226, 0.6)";
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.strokeStyle = "transparent";
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.BubblesOne = BubblesOne;
    class BubblesTwo {
        moveBubbles() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 650;
            }
        }
        drawBubbles() {
            Aufgabe10.crc2.fillStyle = "rgb(206, 220, 226, 0.6)";
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.strokeStyle = "transparent";
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.BubblesTwo = BubblesTwo;
    class BubblesThree {
        moveBubbles() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 650;
            }
        }
        drawBubbles() {
            Aufgabe10.crc2.fillStyle = "rgb(206, 220, 226, 0.6)";
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.strokeStyle = "transparent";
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.BubblesThree = BubblesThree;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=drawBubbles.js.map