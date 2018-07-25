/*  Aufgabe: Abschlussaufgabe
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Dot {

    // EventListener auf dem Window, wenn geladen, dann wird die Init-Funktion aufgerufen
    window.addEventListener("load", init);

    // Deklarieren der notwendigen Variablen
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let clickOnCanvas: HTMLCanvasElement;
    export let superclass: SuperClass[] = [];
    export let opponents: Square[] = [];
    let imgData: ImageData;

    // Erzeugen des springenden Punktes, der anschlieﬂend in das Array gepusht wird
    let dot: Dot = new Dot();
    superclass.push(dot);

    // init-Funktion - Startbildschirm wird angezeigt, Spiel an sich noch nicht
    function init(_event: Event): void {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("dot").style.display = "none";
    } // init

    // start-Funktion - Spiel beginnt
    function start(_event: Event): void {
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("dot").style.display = "block";

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // Hintergrund des Spiels
        environment();

        // Hintergrund in einer Variablen speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // Aufruf der animate-Funktion
        animate();

        // Erzeugen der Vierrecke
        for (let i: number = 0; i < 4; i++) {
            let square: Square = new Square();
            opponents.push(square);
        }

        // Erzeugen der Dreiecke
        for (let i: number = 0; i < 2; i++) {
            let triangle: Triangle = new Triangle();
            opponents.push(triangle);
        }

        // Steuerung durch den Klick bzw. durch Touch, installieren von EventListener auf dem Canvas
        clickOnCanvas = <HTMLCanvasElement>document.getElementsByTagName("canvas")[0];
        clickOnCanvas.addEventListener("mousedown", navigateTop);
        clickOnCanvas.addEventListener("touchstart", navigateTop);

        // navigateTop-Funktion - Bewegung des Dots nach oben
        function navigateTop(): void {
            dot.gravity = -0.2;
        }

        // Steuerung durch den Klick bzw. durch Touch, installieren von EventListener auf dem Canvas
        clickOnCanvas.addEventListener("mouseup", navigateBottom);
        clickOnCanvas.addEventListener("touchend", navigateBottom);

        // navigateBottom-Funktion - Bewegung des Dots nach unten
        function navigateBottom(): void {
            dot.gravity = 0.1;
        }

        // Timeout - nach 40 Sekunden erscheint eine Meldung, dass man gewonnen hat
        window.setTimeout(gratulation, 40000);
    }

    // animate-Funktion
    function animate(): void {

        // Timeout
        window.setTimeout(animate, 10);

        // Canvas leeren und neu zeichnen lassen
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        // Aufruf der drawObjects-, moveObjects- und newPosition-Funktion
        drawObjects();
        moveObjects();
        newPosition();
    } // animate

    // drawObjects-Funktion
    function drawObjects(): void {
        for (let i: number = 0; i < superclass.length; i++) {
            superclass[i].draw();
        }

        for (let i: number = 0; i < opponents.length; i++) {
            opponents[i].draw();
        }
    } // drawObjects

    // newPosition-Funktion
    function newPosition(): void {
        dot.setNewPosition();
    } // newPosition

    // MoveObjects-Funktion
    function moveObjects(): void {
        for (let i: number = 0; i < superclass.length; i++) {
            superclass[i].move();
            superclass[i].checkPosition();
        }

        for (let i: number = 0; i < opponents.length; i++) {
            opponents[i].checkPositionSquare();
            opponents[i].move();

        }
    } // moveObjects

    function gratulation(): void {
        window.alert("CONGRATULATION");
        if (window.alert) {
            location.reload();
        }
    } // gratulation
} // namespace