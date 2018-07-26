/*  Aufgabe: Abschlussaufgabe
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Dot;
(function (Dot) {
    // EventListener auf dem Window, wenn geladen, dann wird die Init-Funktion aufgerufen
    window.addEventListener("load", init);
    Dot.superclass = [];
    Dot.opponents = [];
    let imgData;
    // Erzeugen des springenden Punktes, der anschlie�end in das Array gepusht wird
    let dot = new Dot.Dot();
    Dot.superclass.push(dot);
    // init-Funktion - Startbildschirm wird angezeigt, Spiel an sich noch nicht
    function init(_event) {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("dot").style.display = "none";
    } // init
    // start-Funktion - Spiel beginnt
    function start(_event) {
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("dot").style.display = "block";
        Dot.canvas = document.getElementsByTagName("canvas")[0];
        Dot.crc2 = Dot.canvas.getContext("2d");
        // Hintergrund des Spiels
        Dot.environment();
        // Hintergrund in einer Variablen speichern
        imgData = Dot.crc2.getImageData(0, 0, Dot.canvas.width, Dot.canvas.height);
        // Aufruf der animate-Funktion
        animate();
        // Erzeugen der Vierrecke
        for (let i = 0; i < 4; i++) {
            let square = new Dot.Square();
            Dot.opponents.push(square);
        }
        // Erzeugen der Dreiecke
        for (let i = 0; i < 2; i++) {
            let triangle = new Dot.Triangle();
            Dot.opponents.push(triangle);
        }
        // Steuerung durch den Klick bzw. durch Touch, installieren von EventListener auf dem Canvas
        Dot.clickOnCanvas = document.getElementsByTagName("canvas")[0];
        Dot.clickOnCanvas.addEventListener("mousedown", navigateTop);
        Dot.clickOnCanvas.addEventListener("touchstart", navigateTop);
        // navigateTop-Funktion - Bewegung des Dots nach oben
        function navigateTop() {
            dot.gravity = -0.1;
        }
        // Steuerung durch den Klick bzw. durch Touch, installieren von EventListener auf dem Canvas
        Dot.clickOnCanvas.addEventListener("mouseup", navigateBottom);
        Dot.clickOnCanvas.addEventListener("touchend", navigateBottom);
        // navigateBottom-Funktion - Bewegung des Dots nach unten
        function navigateBottom() {
            dot.gravity = 0.06;
        }
        // Timeout - nach 40 Sekunden erscheint eine Meldung, dass man gewonnen hat
        window.setTimeout(gratulation, 40000);
    }
    // animate-Funktion
    function animate() {
        // Timeout
        window.setTimeout(animate, 10);
        // Canvas leeren und neu zeichnen lassen
        Dot.crc2.clearRect(0, 0, Dot.crc2.canvas.width, Dot.crc2.canvas.height);
        Dot.crc2.putImageData(imgData, 0, 0);
        // Aufruf der drawObjects-, moveObjects- und newPosition-Funktion
        drawObjects();
        moveObjects();
        newPosition();
    } // animate
    // drawObjects-Funktion
    function drawObjects() {
        for (let i = 0; i < Dot.superclass.length; i++) {
            Dot.superclass[i].draw();
        }
        for (let i = 0; i < Dot.opponents.length; i++) {
            Dot.opponents[i].draw();
        }
    } // drawObjects
    // newPosition-Funktion
    function newPosition() {
        dot.setNewPosition();
    } // newPosition
    // MoveObjects-Funktion
    function moveObjects() {
        for (let i = 0; i < Dot.superclass.length; i++) {
            Dot.superclass[i].move();
            Dot.superclass[i].checkPosition();
        }
        for (let i = 0; i < Dot.opponents.length; i++) {
            Dot.opponents[i].checkPositionSquare();
            Dot.opponents[i].move();
        }
    } // moveObjects
    function gratulation() {
        window.alert("Congratulation - You've won!\nWanna play again? Let's go!");
        if (window.alert) {
            location.reload();
        }
    } // gratulation
})(Dot || (Dot = {})); // namespace
//# sourceMappingURL=Abschlussaufgabe.js.map