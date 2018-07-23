/*  Aufgabe: Aufgabe 9: Canvas - Seaworld
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 17.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Dot;
(function (Dot) {
    window.addEventListener("load", init);
    let superclass = [];
    let imgData;
    function init(_event) {
        Dot.canvas = document.getElementsByTagName("canvas")[0];
        Dot.crc2 = Dot.canvas.getContext("2d");
        Dot.canvas.addEventListener("keydown", hoppingDot);
        // Hintergrund des Spiels
        Dot.environment();
        // Hintergrund in einer Variablen speichern
        imgData = Dot.crc2.getImageData(0, 0, Dot.canvas.width, Dot.canvas.height);
        // Dot in das Array "superclass" pushen  
        //        let dot: Dot = new Dot();
        //        superclass.push(dot);
        // Aufruf der animate-Funktion
        animate();
        for (let i = 0; i < 4; i++) {
            let square = new Dot.Square();
            superclass.push(square);
            console.log("Square");
        }
        for (let i = 0; i < 2; i++) {
            let triangle = new Dot.Triangle();
            superclass.push(triangle);
        }
    } // init
    function hoppingDot(_event) {
        //        let newPositionY: number;
        //        let newPositionX: number; 
        let dot = new Dot.Dot();
        superclass.push(dot);
        if (_event.keyCode == 32) {
            this.x += 0;
            this.y -= 100;
        }
    }
    // Animate-Funktion
    function animate() {
        window.setTimeout(animate, 10);
        Dot.crc2.clearRect(0, 0, Dot.crc2.canvas.width, Dot.crc2.canvas.height);
        Dot.crc2.putImageData(imgData, 0, 0);
        drawObjects();
        moveObjects();
    }
    // DrawObjects-Funktion
    function drawObjects() {
        for (let i = 0; i < superclass.length; i++) {
            superclass[i].draw();
        }
    }
    // MoveObjects-Funktion
    function moveObjects() {
        for (let i = 0; i < superclass.length; i++) {
            superclass[i].move();
        }
    }
})(Dot || (Dot = {})); // namespace
//# sourceMappingURL=Abschlussaufgabe.js.map