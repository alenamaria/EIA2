var Dot;
(function (Dot) {
    class Square extends Dot.Dot {
        constructor() {
            super();
            this.setRandomColor();
            this.setStartPosition();
            this.setRandomSpawnPoint();
        }
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
        }
        move() {
            this.x -= 1;
            this.y += 0;
            if (this.x < -50) {
                this.x = Dot.canvas.width + 50;
            }
        }
        setStartPosition() {
            this.x = Dot.canvas.width + 50;
            this.y = 510;
        }
        setRandomSpawnPoint() {
            this.x = Math.random() * ((Dot.crc2.canvas.width + 700) - (Dot.crc2.canvas.width + 50)) + (Dot.crc2.canvas.width + 50);
            this.y = 510;
        }
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