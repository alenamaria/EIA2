/*  Aufgabe: Aufgabe 9: Canvas - Seaworld
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 17.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Franziska Hei� erarbeitet*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let n = 7;
    let canvas;
    let imgData;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", InsertNewObject);
        // Hintergrundbild-Funktion
        Aufgabe11.environment();
        // Hintergrund in der Variable speichern
        imgData = Aufgabe11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        // For-Schleifen f�r die Luftblasen
        for (let i = 0; i < 10; i++) {
            let bubbles = new Aufgabe11.BubblesOne();
            movingObjects.push(bubbles);
        }
        for (let i = 0; i < 16; i++) {
            let bubbles = new Aufgabe11.BubblesTwo();
            movingObjects.push(bubbles);
        }
        for (let i = 0; i < 16; i++) {
            let bubbles = new Aufgabe11.BubblesThree();
            movingObjects.push(bubbles);
        }
        // For-Schleife f�r die gro�en Fische
        for (let i = 0; i < n; i++) {
            let fish = new Aufgabe11.Fish();
            fish.x = Math.random() * Aufgabe11.crc2.canvas.width;
            fish.y = Math.random() * Aufgabe11.crc2.canvas.height;
            movingObjects.push(fish);
        }
        // For-Schleife f�r die kleinen Fische
        for (let i = 0; i < 5; i++) {
            let fish = new Aufgabe11.LittleFish();
            fish.x = Math.random() * Aufgabe11.crc2.canvas.width;
            fish.y = Math.random() * Aufgabe11.crc2.canvas.height;
            movingObjects.push(fish);
        }
        // Aufruf der Animate-Funktion
        animate();
    } //init
    // InsertNewObject - Mausposition im Canvas
    function InsertNewObject(_event) {
        let newPositionX = _event.clientX;
        let newPositionY = _event.clientY;
        let flakes = new Aufgabe11.Flakes(newPositionX, newPositionY);
        movingObjects.push(flakes);
    }
    // Animate-Funktion
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe11.crc2.clearRect(0, 0, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height);
        Aufgabe11.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
        console.log("Animate");
    }
    // moveObjects-Funktion
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    // drawObjects-Funktion
    function drawObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Aufgabe11.js.map