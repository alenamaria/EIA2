var Dot;
(function (Dot) {
    class Triangle extends Dot.Square {
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
            Dot.crc2.lineTo(this.x + 28, this.y - 50);
            Dot.crc2.lineTo(this.x + 56, this.y);
            Dot.crc2.closePath();
            Dot.crc2.fill();
            Dot.crc2.strokeStyle = "transparent";
            Dot.crc2.stroke();
        }
        setStartPosition() {
            this.x = Dot.canvas.width + 50;
            this.y = 510;
        }
        setRandomSpawnPoint() {
            this.x = Math.random() * ((Dot.crc2.canvas.width + 700) - (Dot.crc2.canvas.width + 50)) + (Dot.crc2.canvas.width + 50);
            this.y = 560;
        }
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