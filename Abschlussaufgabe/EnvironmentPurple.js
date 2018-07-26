/*  Aufgabe: Abschlussaufgabe
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Dot;
(function (Dot) {
    // Funktionsaufrufe der einzelnen Funktionen
    function environmentPurple() {
        floorNormalPurple();
        backgroundPurple();
        hill_1_Purple(75, 550);
        hill_2_Purple(160, 550);
        hill_2_Purple(630, 550);
        hill_2_Purple(830, 550);
        hill_1_Purple(715, 550);
    }
    Dot.environmentPurple = environmentPurple;
    // floorNormalPurple-Funktion - zeichnet den Boden
    function floorNormalPurple() {
        // Farbverlauf - Gradient
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
    // backgroundPurple-Funktion - zeichnet die Hintergrund-Fl�che
    function backgroundPurple() {
        // Farbverlauf - Gradient
        let gradient = Dot.crc2.createLinearGradient(350, 0, 350, 550);
        gradient.addColorStop(0, "#b280a0");
        gradient.addColorStop(1, "#ddc7d5");
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
    // hill_1_Purple-Funktion - zeichnet den gr��eren H�gel im Hintergrund
    function hill_1_Purple(_x, _y) {
        Dot.crc2.fillStyle = "rgb(178, 99, 149, 0.7)";
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
    // hill_2_Purple-Funktion - zeichnet den kleineren H�gel im Hintergrund
    function hill_2_Purple(_x, _y) {
        Dot.crc2.fillStyle = "rgb(142, 97, 126, 0.7)";
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
//# sourceMappingURL=EnvironmentPurple.js.map