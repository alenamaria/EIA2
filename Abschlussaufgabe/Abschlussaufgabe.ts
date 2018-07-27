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

    // Variable für den Timer, damit dieser im Falle eines Game Overs gestoppt werden kann
    export let timer: number;
    export let gameover2: boolean = false;

    // Variable, um abzufragen, ob das Spiel gerade läuft
    let gameRunning: boolean = false;

    // Erzeugen des springenden Punktes, der anschließend in das Array gepusht wird
    let dot: Dot = new Dot();
    superclass.push(dot);

    // init-Funktion - Startbildschirm wird angezeigt, Spiel an sich noch nicht
    function init(_event: Event): void {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("dot").style.display = "none";
        document.getElementById("gameover").style.display = "none";
        document.getElementById("victory").style.display = "none";
    } // init

    // gameover-Funktion - Anzeige, dass man verloren hat
    export function gameover(_event: Event): void {
        document.getElementById("gameover").style.display = "block";
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("dot").style.display = "none";
        document.getElementById("victory").style.display = "none";
        // gameRunning auf false festsetzen
        gameRunning = false;

        if (document.getElementById("gameover").style.display == "block") {
            clearTimeout(timer);
        }
    } // gameover

    // gratulation-Funktion - Anzeige, dass man gewonnen hat
    function gratulation(_event: Event): void {
        document.getElementById("victory").style.display = "block";
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("dot").style.display = "none";
        document.getElementById("gameover").style.display = "none";
        // gameRunning auf false festsetzen
        gameRunning = false;
    } // gratulation

    // start-Funktion - Spiel beginnt
    export function start(_event: Event): void {
        document.getElementById("dot").style.display = "block";
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("gameover").style.display = "none";
        document.getElementById("victory").style.display = "none";

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // gameRunning auf true festsetzen - Spiel läuft
        gameRunning = true;

        // Hintergrund des Spiels
        setBackground();

        // Hintergrund in einer Variablen speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // Aufruf der animate-Funktion
        animate();

        // Erzeugen der Vierrecke
        for (let i: number = 0; i < 5; i++) {
            let square: Square = new Square();
            opponents.push(square);
        }

        // Erzeugen der Dreiecke
        for (let i: number = 0; i < 3; i++) {
            let triangle: Triangle = new Triangle();
            opponents.push(triangle);
        }

        // Steuerung durch den Klick bzw. durch Touch, installieren von EventListener auf dem Canvas
        clickOnCanvas = <HTMLCanvasElement>document.getElementsByTagName("canvas")[0];
        clickOnCanvas.addEventListener("mousedown", navigateTop);
        clickOnCanvas.addEventListener("touchstart", navigateTop);

        // navigateTop-Funktion - Bewegung des Dots nach oben
        function navigateTop(): void {
            dot.gravity = -0.1;
        }

        // Steuerung durch den Klick bzw. durch Touch, installieren von EventListener auf dem Canvas
        clickOnCanvas.addEventListener("mouseup", navigateBottom);
        clickOnCanvas.addEventListener("touchend", navigateBottom);

        // navigateBottom-Funktion - Bewegung des Dots nach unten
        function navigateBottom(): void {
            dot.gravity = 0.06;
        }

        // Timeout - nach 40 Sekunden erscheint eine Meldung, dass man gewonnen hat
        timer = window.setTimeout(gratulation, 40000);
    }

    // animate-Funktion
    function animate(): void {

        // Timeout
        window.setTimeout(animate, 10);

        // Canvas leeren und neu zeichnen lassen
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        // Wenn gameRunning false zurück gibt, dann sollen weder die draw- noch die move
        if (gameRunning) {
            // Aufruf der drawObjects-, moveObjects- und newPosition-Funktion
            drawObjects();
            moveObjects();
            newPosition();
        }


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
        }

        for (let i: number = 0; i < opponents.length; i++) {
            opponents[i].checkPositionSquare();
            opponents[i].move();

        }
    } // moveObjects

    function setBackground(): void {
        let b: number = Math.floor(Math.random() * 4);
        switch (b) {
            case 0:
                environmentBlue();
                break;
            case 1:
                environmentYellow();
                break;
            case 2:
                environmentGreen();
                break;
            case 3:
                environmentPurple();
        } // switch   
    } // setBackground
} // namespace