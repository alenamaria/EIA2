/*  Aufgabe: Abschlussaufgabe
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Dot;
(function (Dot) {
    // EventListener auf dem Window, wenn geladen, dann wird die Init-Funktion aufgerufen
    window.addEventListener("load", init);
    let clickOnCanvas;
    let superclass = [];
    let imgData;
    // Erzeugen des springenden Punktes, der anschlie�end in das Array gepusht wird
    let dot = new Dot.Dot();
    superclass.push(dot);
    // init-Funktion
    function init(_event) {
        Dot.canvas = document.getElementsByTagName("canvas")[0];
        Dot.crc2 = Dot.canvas.getContext("2d");
        // Hintergrund des Spiels
        Dot.environment();
        // Hintergrund in einer Variablen speichern
        imgData = Dot.crc2.getImageData(0, 0, Dot.canvas.width, Dot.canvas.height);
        // Aufruf der animate-Funktion
        animate();
        // Erzeugen der Vierrecke
        for (let i = 0; i < 2; i++) {
            let square = new Dot.Square();
            superclass.push(square);
        }
        // Erzeugen der Dreiecke
        for (let i = 0; i < 1; i++) {
            let triangle = new Dot.Triangle();
            superclass.push(triangle);
        }
        // Steuerung durch den Klick bzw. durch Touch, installieren von EventListener auf dem Canvas
        clickOnCanvas = document.getElementsByTagName("canvas")[0];
        clickOnCanvas.addEventListener("mousedown", navigateTop);
        clickOnCanvas.addEventListener("touchstart", navigateTop);
        // navigateTop-Funktion - Bewegung des Dots nach oben
        function navigateTop() {
            dot.gravity = -0.2;
        }
        // Steuerung durch den Klick bzw. durch Touch, installieren von EventListener auf dem Canvas
        clickOnCanvas.addEventListener("mouseup", navigateBottom);
        clickOnCanvas.addEventListener("touchend", navigateBottom);
        // navigateBottom-Funktion - Bewegung des Dots nach unten
        function navigateBottom() {
            dot.gravity = 0.1;
        }
    } // init
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
    }
    // drawObjects-Funktion
    function drawObjects() {
        for (let i = 0; i < superclass.length; i++) {
            superclass[i].draw();
        }
    }
    // newPosition-Funktion
    function newPosition() {
        dot.setNewPosition();
    }
    // MoveObjects-Funktion
    function moveObjects() {
        for (let i = 0; i < superclass.length; i++) {
            superclass[i].move();
        }
    }
})(Dot || (Dot = {})); // namespace
//# sourceMappingURL=Abschlussaufgabe.js.map