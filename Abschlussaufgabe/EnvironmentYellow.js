var Dot;
(function (Dot) {
    function environmentYellow() {
        floorNormalYellow();
        backgroundYellow();
        hill_1_Yellow(75, 550);
        hill_2_Yellow(160, 550);
        hill_2_Yellow(630, 550);
        hill_2_Yellow(830, 550);
        hill_1_Yellow(715, 550);
    }
    Dot.environmentYellow = environmentYellow;
    function floorNormalYellow() {
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
    function backgroundYellow() {
        let gradient = Dot.crc2.createLinearGradient(350, 0, 350, 550);
        gradient.addColorStop(0, "#ffeaaf");
        gradient.addColorStop(1, "#fff0c4");
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
    function hill_1_Yellow(_x, _y) {
        Dot.crc2.fillStyle = "rgb(255, 180, 43, 0.7)";
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
    function hill_2_Yellow(_x, _y) {
        Dot.crc2.fillStyle = "rgb(252, 196, 100, 0.7)";
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
//# sourceMappingURL=EnvironmentYellow.js.map