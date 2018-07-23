/*  Aufgabe: Aufgabe 9: Canvas - Seaworld
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 17.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Dot {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let superclass: SuperClass[] = [];
    let imgData: ImageData;

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("keydown", hoppingDot);

        // Hintergrund des Spiels
        environment();
        
        // Hintergrund in einer Variablen speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // Dot in das Array "superclass" pushen  
//        let dot: Dot = new Dot();
//        superclass.push(dot);

        // Aufruf der animate-Funktion
        animate();
        
        for (let i: number = 0; i < 4; i++) {
            let square: Square = new Square();
            superclass.push(square);   
            console.log("Square"); 
        }
        
        for (let i: number = 0; i < 2; i++) {
            let triangle: Triangle = new Triangle();
            superclass.push(triangle);    
        }
        
    } // init
    
    function hoppingDot(_event: KeyboardEvent): void {
//        let newPositionY: number;
//        let newPositionX: number; 
        
        let dot: Dot = new Dot(/*newPositionX, newPositionY*/);
        superclass.push(dot);
        
        if (_event.keyCode == 32) {
            this.x += 0;
            this.y -= 100;
        }
    }

    // Animate-Funktion
    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
        
        drawObjects();
        moveObjects();
    }

    // DrawObjects-Funktion
    function drawObjects(): void {
        for (let i: number = 0; i < superclass.length; i++) {
            superclass[i].draw();
        }
    }

    // MoveObjects-Funktion
    function moveObjects(): void {
        for (let i: number = 0; i < superclass.length; i++) {
            superclass[i].move();
        }
    }

//    function dot(_x: number, _y: number): void {
//        crc2.fillStyle = "rgb(55, 60, 61)";
//
//        crc2.beginPath();
//        crc2.arc(_x, _y, 27, 0, 2 * Math.PI, true);
//        crc2.closePath();
//        crc2.fill();
//
//        crc2.strokeStyle = "transparent";
//        crc2.stroke();
//    }

} // namespace