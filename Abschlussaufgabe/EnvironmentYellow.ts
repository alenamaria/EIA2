/*  Aufgabe: Abschlussaufgabe
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Dot {

    // Funktionsaufrufe der einzelnen Funktionen
    export function environmentYellow(): void {
        floorNormalYellow();
        backgroundYellow();
        hill_1_Yellow(75, 550);
        hill_2_Yellow(160, 550);
        hill_2_Yellow(630, 550);
        hill_2_Yellow(830, 550);
        hill_1_Yellow(715, 550);
    }

    // floorNormalBlue-Funktion - zeichnet den Boden
    function floorNormalYellow(): void {

        // Farbverlauf - Gradient
        let gradient: CanvasGradient = crc2.createLinearGradient(350, 550, 350, 700);
        gradient.addColorStop(0, "#999999");
        gradient.addColorStop(1, "#383838");

        crc2.fillStyle = gradient;

        crc2.beginPath();
        crc2.moveTo(0, 550);
        crc2.lineTo(1000, 550);
        crc2.lineTo(1000, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();
    }

    // backgroundYellow-Funktion - zeichnet die Hintergrund-Fl�che
    function backgroundYellow(): void {

        // Farbverlauf - Gradient
        let gradient: CanvasGradient = crc2.createLinearGradient(350, 0, 350, 550);
        gradient.addColorStop(0, "#ffeaaf");
        gradient.addColorStop(1, "#fff0c4");

        crc2.fillStyle = gradient;

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(1000, 0);
        crc2.lineTo(1000, 550);
        crc2.lineTo(0, 550);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();
    }

    // hill_1_Yellow-Funktion - zeichnet den gr��eren H�gel im Hintergrund
    function hill_1_Yellow(_x: number, _y: number): void {

        crc2.fillStyle = "rgb(255, 180, 43, 0.7)";

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 150);
        crc2.quadraticCurveTo(_x + 5, _y - 200, _x + 50, _y - 200);
        crc2.quadraticCurveTo(_x + 95, _y - 200, _x + 100, _y - 150);
        crc2.lineTo(_x + 100, _y);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();
    }

    // hill_2_Yellow-Funktion - zeichnet den kleineren H�gel im Hintergrund
    function hill_2_Yellow(_x: number, _y: number): void {

        crc2.fillStyle = "rgb(252, 196, 100, 0.7)";

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 100);
        crc2.quadraticCurveTo(_x + 5, _y - 150, _x + 50, _y - 150);
        crc2.quadraticCurveTo(_x + 95, _y - 150, _x + 100, _y - 100);
        crc2.lineTo(_x + 100, _y);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();
    }
}