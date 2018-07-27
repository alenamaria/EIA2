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
    Dot.gameover2 = false;
    // Variable, um abzufragen, ob das Spiel gerade l�uft
    let gameRunning = false;
    // Erzeugen des springenden Punktes, der anschlie�end in das Array gepusht wird
    let dot = new Dot.Dot();
    Dot.superclass.push(dot);
    // init-Funktion - Startbildschirm wird angezeigt, Spiel an sich noch nicht
    function init(_event) {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("dot").style.display = "none";
        document.getElementById("gameover").style.display = "none";
        document.getElementById("victory").style.display = "none";
    } // init
    // gameover-Funktion - Anzeige, dass man verloren hat
    function gameover(_event) {
        document.getElementById("gameover").style.display = "block";
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("dot").style.display = "none";
        document.getElementById("victory").style.display = "none";
        // gameRunning auf false festsetzen
        gameRunning = false;
        if (document.getElementById("gameover").style.display == "block") {
            clearTimeout(Dot.timer);
        }
    }
    Dot.gameover = gameover; // gameover
    // gratulation-Funktion - Anzeige, dass man gewonnen hat
    function gratulation(_event) {
        document.getElementById("victory").style.display = "block";
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("dot").style.display = "none";
        document.getElementById("gameover").style.display = "none";
        // gameRunning auf false festsetzen
        gameRunning = false;
    } // gratulation
    // start-Funktion - Spiel beginnt
    function start(_event) {
        document.getElementById("dot").style.display = "block";
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("gameover").style.display = "none";
        document.getElementById("victory").style.display = "none";
        Dot.canvas = document.getElementsByTagName("canvas")[0];
        Dot.crc2 = Dot.canvas.getContext("2d");
        // gameRunning auf true festsetzen - Spiel l�uft
        gameRunning = true;
        // Hintergrund des Spiels
        setBackground();
        // Hintergrund in einer Variablen speichern
        imgData = Dot.crc2.getImageData(0, 0, Dot.canvas.width, Dot.canvas.height);
        // Aufruf der animate-Funktion
        animate();
        // Erzeugen der Vierrecke
        for (let i = 0; i < 5; i++) {
            let square = new Dot.Square();
            Dot.opponents.push(square);
        }
        // Erzeugen der Dreiecke
        for (let i = 0; i < 3; i++) {
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
        Dot.timer = window.setTimeout(gratulation, 40000);
    }
    Dot.start = start;
    // animate-Funktion
    function animate() {
        // Timeout
        window.setTimeout(animate, 10);
        // Canvas leeren und neu zeichnen lassen
        Dot.crc2.clearRect(0, 0, Dot.crc2.canvas.width, Dot.crc2.canvas.height);
        Dot.crc2.putImageData(imgData, 0, 0);
        // Wenn gameRunning false zur�ck gibt, dann sollen weder die draw- noch die move
        if (gameRunning) {
            // Aufruf der drawObjects-, moveObjects- und newPosition-Funktion
            drawObjects();
            moveObjects();
            newPosition();
        }
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
        }
        for (let i = 0; i < Dot.opponents.length; i++) {
            Dot.opponents[i].checkPositionSquare();
            Dot.opponents[i].move();
        }
    } // moveObjects
    function setBackground() {
        let b = Math.floor(Math.random() * 4);
        switch (b) {
            case 0:
                Dot.environmentBlue();
                break;
            case 1:
                Dot.environmentYellow();
                break;
            case 2:
                Dot.environmentGreen();
                break;
            case 3:
                Dot.environmentPurple();
        } // switch   
    } // setBackground
})(Dot || (Dot = {})); // namespace
//# sourceMappingURL=Abschlussaufgabe.js.map