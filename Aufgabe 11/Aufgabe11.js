/*  Aufgabe: Aufgabe 9: Canvas - Seaworld
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 17.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Franziska Hei� und Anna Lotz erarbeitet*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let n = 7;
    let imgData;
    function init(_event) {
        Aufgabe11.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = Aufgabe11.canvas.getContext("2d");
        Aufgabe11.canvas.addEventListener("click", InsertNewObject);
        // Hintergrundbild-Funktion
        Aufgabe11.environment();
        // Hintergrund in der Variable speichern
        imgData = Aufgabe11.crc2.getImageData(0, 0, Aufgabe11.canvas.width, Aufgabe11.canvas.height);
        // For-Schleifen f�r die Luftblasen
        for (let i = 0; i < 10; i++) {
            let bubbles = new Aufgabe11.BubbleOne();
            movingObjects.push(bubbles);
            console.log("BubblesNew");
        }
        for (let i = 0; i < 16; i++) {
            let bubbles = new Aufgabe11.BubbleTwo();
            movingObjects.push(bubbles);
        }
        for (let i = 0; i < 16; i++) {
            let bubbles = new Aufgabe11.BubbleThree();
            movingObjects.push(bubbles);
        }
        // For-Schleife f�r die gro�en Fische
        for (let i = 0; i < n; i++) {
            let fish = new Aufgabe11.Fish();
            movingObjects.push(fish);
        }
        // For-Schleife f�r die kleinen Fische
        for (let i = 0; i < 5; i++) {
            let fish = new Aufgabe11.LittleFish();
            movingObjects.push(fish);
        }
        // Aufruf der Animate-Funktion
        animate();
        console.log(Aufgabe11.BubbleOne);
    } //init
    // InsertNewObject - Mausposition im Canvas
    function InsertNewObject(_event) {
        let newPositionX = _event.clientX;
        let newPositionY = _event.clientY;
        for (let i = 0; i < 4; i++) {
            let flakes = new Aufgabe11.Flake(newPositionX, newPositionY);
            movingObjects.push(flakes);
            newPositionX += Math.random() * 50;
            newPositionX -= Math.random() * 50;
            newPositionY += Math.random() * 40;
        }
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