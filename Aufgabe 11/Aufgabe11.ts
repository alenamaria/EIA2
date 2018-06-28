/*  Aufgabe: Aufgabe 9: Canvas - Seaworld
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 17.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Franziska Hei� erarbeitet*/

namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let movingObjects: MovingObjects[] = [];
    let n: number = 7;

    let imgData: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", InsertNewObject);

        // Hintergrundbild-Funktion

        environment();

        // For-Schleifen f�r die Luftblasen

        for (let i: number = 0; i < 10; i++) {
            let bubbles: BubblesOne = new BubblesOne();
            movingObjects.push(bubbles);
        }

        for (let i: number = 0; i < 16; i++) {
            let bubbles: BubblesTwo = new BubblesTwo();
            bubbles.x = Math.random() * (100 - 150) + 100;
            bubbles.y = Math.random() * (700 - 100) + 300;
            bubbles.radius = Math.random() * 8; 
            movingObjects.push(bubbles);
        }
        
        for (let i: number = 0; i < 16; i++) {
            let bubbles: BubblesThree = new BubblesThree();
            bubbles.x = Math.random() * (700 - 750) + 750;
            bubbles.y = Math.random() * 500;
            bubbles.radius = Math.random() * 10; 
            movingObjects.push(bubbles);
        }

        // For-Schleife f�r die gro�en Fische

        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            movingObjects.push(fish);
        }

        // For-Schleife f�r die kleinen Fische

        for (let i: number = 0; i < 5; i++) {
            let fish: LittleFish = new LittleFish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            movingObjects.push(fish);
        }

        // Hintergrund in der Variable speichern
        
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        // Aufruf der Animate-Funktion
        
        animate();
    }

    function InsertNewObject(_event: MouseEvent): void {
        let newPositionX: number = _event.clientX;
        let newPositionY: number = _event.clientY;   
        
        let flakes: Flakes = new Flakes(newPositionX, newPositionY);
        movingObjects.push(flakes);
    }
    
    // Animate-Funktion
    
    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
        
        console.log("Animate");
    }
    
    // moveObjects-Funktion

    function moveObjects(): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    
    // drawObjects-Funktion

    function drawObjects(): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }    
    }

    // Hintergrund - Bild

    function environment(): void {
        background();

        drawBigSeaGrass(700, 550);
        drawBigSeaGrass(300, 570);
        drawSmallSeaGrass(760, 600);
        drawSmallSeaGrass(270, 630);

        drawRocks();
        drawSand();

        drawBigSeaGrass(65, 720);
        drawSmallSeaGrass(45, 800);

        drawChest(700, 500);
        drawAnchor(680, 490);
    }

    function background(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#bde8dc");
        gradient.addColorStop(1, "#30547a");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 700);
    }

    // Meeresboden - Sand

    function drawSand(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(300, 700, 300, 500);
        gradient.addColorStop(0, "#cc9933");
        gradient.addColorStop(1, "#b28f4a");

        crc2.fillStyle = gradient;

        crc2.beginPath();
        crc2.moveTo(0, 550);
        crc2.quadraticCurveTo(50, 530, 100, 525);
        crc2.quadraticCurveTo(200, 530, 300, 550);
        crc2.quadraticCurveTo(350, 560, 500, 570);
        crc2.quadraticCurveTo(600, 550, 900, 500);
        crc2.quadraticCurveTo(950, 500, 1000, 520);
        crc2.lineTo(1000, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "rgb(204,153,51)";
        crc2.stroke();

    }

    // Truhe

    function drawChest(_x: number, _y: number): void {

        // Part 1
        crc2.fillStyle = "rgb(109, 77, 35)";

        crc2.beginPath();
        crc2.moveTo(_x, _y); //700, 560
        crc2.lineTo(_x, _y + 50);
        crc2.lineTo(_x + 50, _y + 50);
        crc2.lineTo(_x + 50, _y);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

        // Part 2
        crc2.fillStyle = "rgb(89, 63, 29)";

        crc2.beginPath();
        crc2.moveTo(_x + 100, _y + 100);
        crc2.lineTo(_x + 50, _y + 50);
        crc2.lineTo(_x + 50, _y);
        crc2.lineTo(_x + 100, _y + 50);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

        // Part 3
        crc2.fillStyle = "rgb(130, 89, 36)";

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 50);
        crc2.lineTo(_x + 50, _y + 100);
        crc2.lineTo(_x + 50, _y + 50);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();


        // Part 4
        crc2.fillStyle = "rgb(142, 100, 45)";

        crc2.beginPath();
        crc2.moveTo(_x + 50, _y + 50);
        crc2.lineTo(_x + 100, _y + 50);
        crc2.lineTo(_x + 100, _y + 100);
        crc2.lineTo(_x + 50, _y + 100);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

        // Part 5 
        crc2.fillStyle = "rgb(114, 81, 39)";

        crc2.beginPath();
        crc2.moveTo(_x + 100, _y + 50);
        crc2.lineTo(_x + 125, _y + 10);
        crc2.lineTo(_x + 75, _y - 40);
        crc2.lineTo(_x + 50, _y);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

        // Deckel 3D-W�lbung - vorne        
        crc2.fillStyle = "rgb(142, 100, 45)";

        crc2.beginPath();
        crc2.moveTo(_x + 100, _y + 50);
        crc2.quadraticCurveTo(_x + 130, _y + 40, _x + 125, _y + 10);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

        // Deckel 3D-W�lbung - hinten        
        crc2.fillStyle = "rgb(99, 72, 36)";

        crc2.beginPath();
        crc2.moveTo(_x + 50, _y);
        crc2.quadraticCurveTo(_x + 80, _y - 10, _x + 75, _y - 40);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

    }

    // Anker

    function drawAnchor(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.moveTo(_x - 5, _y);
        crc2.lineTo(_x + 5, _y);
        crc2.lineTo(_x + 5, _y + 30);
        crc2.lineTo(_x + 30, _y + 30);
        crc2.lineTo(_x + 25, _y + 40);
        crc2.lineTo(_x + 5, _y + 40);
        crc2.lineTo(_x + 5, _y + 90);
        crc2.quadraticCurveTo(_x + 10, _y + 105, _x + 40, _y + 80);
        crc2.lineTo(_x + 25, _y + 75);
        crc2.lineTo(_x + 55, _y + 70);
        crc2.lineTo(_x + 50, _y + 100);
        crc2.lineTo(_x + 45, _y + 85);
        crc2.quadraticCurveTo(_x, _y + 130, _x - 45, _y + 85);
        crc2.lineTo(_x - 50, _y + 100);
        crc2.lineTo(_x - 55, _y + 70);
        crc2.lineTo(_x - 25, _y + 75);
        crc2.lineTo(_x - 40, _y + 80);
        crc2.quadraticCurveTo(_x - 10, _y + 105, _x - 5, _y + 90);
        crc2.lineTo(_x - 5, _y + 40);
        crc2.lineTo(_x - 25, _y + 40);
        crc2.lineTo(_x - 30, _y + 30);
        crc2.lineTo(_x - 5, _y + 30);
        crc2.fillStyle = "#282c2d";
        crc2.fill();
        crc2.closePath();
        crc2.strokeStyle = "transparent";
        crc2.stroke();

    }

    // gro�es Seegras

    function drawBigSeaGrass(_x: number, _y: number): void {

        crc2.fillStyle = "#375635";

        crc2.beginPath();

        // x=700 und y=550

        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 20, _y - 25, _x - 5, _y - 70);
        crc2.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
        crc2.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
        crc2.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
        crc2.quadraticCurveTo(_x + 40, _y - 105, _x + 27, _y - 70);
        crc2.quadraticCurveTo(_x + 20, _y - 30, _x + 40, _y);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

    }

    // kleines Seegras

    function drawSmallSeaGrass(_a: number, _b: number): void {

        crc2.fillStyle = "#527c4f";

        crc2.beginPath();

        // a=700 und b= 550

        crc2.moveTo(_a, _b);
        crc2.quadraticCurveTo(_a + 15, _b - 110, _a + 2, _b - 150);
        crc2.quadraticCurveTo(_a - 10, _b - 185, _a + 10, _b - 230);
        crc2.quadraticCurveTo(_a + 8, _b - 165, _a + 25, _b - 138);
        crc2.quadraticCurveTo(_a + 40, _b - 105, _a + 40, _b);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

    }

    // Fels

    function drawRocks(): void {

        crc2.fillStyle = "#5f6263";

        crc2.beginPath();
        crc2.moveTo(235, 580);
        crc2.quadraticCurveTo(240, 540, 280, 500);
        crc2.quadraticCurveTo(315, 465, 340, 480);
        crc2.lineTo(380, 510);
        crc2.lineTo(420, 520);
        crc2.quadraticCurveTo(480, 550, 500, 580);
        crc2.quadraticCurveTo(380, 600, 235, 580);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

    }
}