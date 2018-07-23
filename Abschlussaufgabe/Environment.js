var Dot;
(function (Dot) {
    function environment() {
        floor();
        background();
        hill_1(75, 550);
        hill_2(160, 550);
        hill_2(630, 550);
        hill_2(830, 550);
        hill_1(715, 550);
    }
    Dot.environment = environment;
    function floor() {
        let gradient = Dot.crc2.createLinearGradient(350, 550, 350, 700);
        gradient.addColorStop(0, "#999999");
        gradient.addColorStop(1, "#383838");
        Dot.crc2.fillStyle = gradient;
        Dot.crc2.beginPath();
        Dot.crc2.moveTo(0, 550);
        Dot.crc2.lineTo(1000, 550);
        Dot.crc2.lineTo(1000, 700);
        Dot.crc2.lineTo(0, 700);
        Dot.crc2.closePath();
        Dot.crc2.fill();
        Dot.crc2.strokeStyle = "transparent";
        Dot.crc2.stroke();
    }
    function background() {
        let gradient = Dot.crc2.createLinearGradient(350, 0, 350, 550);
        gradient.addColorStop(0, "#247d87");
        gradient.addColorStop(1, "#c3d8db");
        Dot.crc2.fillStyle = gradient;
        Dot.crc2.beginPath();
        Dot.crc2.moveTo(0, 0);
        Dot.crc2.lineTo(1000, 0);
        Dot.crc2.lineTo(1000, 550);
        Dot.crc2.lineTo(0, 550);
        Dot.crc2.lineTo(0, 0);
        Dot.crc2.closePath();
        Dot.crc2.fill();
        Dot.crc2.strokeStyle = "transparent";
        Dot.crc2.stroke();
    }
    function hill_1(_x, _y) {
        Dot.crc2.fillStyle = "rgb(4, 123, 140, 0.7)";
        // x=75 und y=550
        Dot.crc2.beginPath();
        Dot.crc2.moveTo(_x, _y);
        Dot.crc2.lineTo(_x, _y - 150);
        Dot.crc2.quadraticCurveTo(_x + 5, _y - 200, _x + 50, _y - 200);
        Dot.crc2.quadraticCurveTo(_x + 95, _y - 200, _x + 100, _y - 150);
        Dot.crc2.lineTo(_x + 100, _y);
        Dot.crc2.closePath();
        Dot.crc2.fill();
        Dot.crc2.strokeStyle = "transparent";
        Dot.crc2.stroke();
    }
    function hill_2(_x, _y) {
        Dot.crc2.fillStyle = "rgb(63, 106, 112, 0.7)";
        Dot.crc2.beginPath();
        Dot.crc2.moveTo(_x, _y);
        Dot.crc2.lineTo(_x, _y - 100);
        Dot.crc2.quadraticCurveTo(_x + 5, _y - 150, _x + 50, _y - 150);
        Dot.crc2.quadraticCurveTo(_x + 95, _y - 150, _x + 100, _y - 100);
        Dot.crc2.lineTo(_x + 100, _y);
        Dot.crc2.closePath();
        Dot.crc2.fill();
        Dot.crc2.strokeStyle = "transparent";
        Dot.crc2.stroke();
    }
})(Dot || (Dot = {}));
//# sourceMappingURL=Environment.js.map