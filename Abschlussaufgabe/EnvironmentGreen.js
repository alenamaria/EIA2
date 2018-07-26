var Dot;
(function (Dot) {
    function environmentGreen() {
        floorNormalGreen();
        backgroundGreen();
        hill_1_Green(75, 550);
        hill_2_Green(160, 550);
        hill_2_Green(630, 550);
        hill_2_Green(830, 550);
        hill_1_Green(715, 550);
    }
    Dot.environmentGreen = environmentGreen;
    function floorNormalGreen() {
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
    function backgroundGreen() {
        let gradient = Dot.crc2.createLinearGradient(350, 0, 350, 550);
        gradient.addColorStop(0, "#c4db8e");
        gradient.addColorStop(1, "#e1edc7");
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
    function hill_1_Green(_x, _y) {
        Dot.crc2.fillStyle = "rgb(173, 211, 80, 0.7)";
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
    function hill_2_Green(_x, _y) {
        Dot.crc2.fillStyle = "rgb(120, 155, 37, 0.7)";
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
//# sourceMappingURL=EnvironmentGreen.js.map