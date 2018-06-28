/*  Aufgabe: Aufgabe 9: Canvas - Seaworld
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 17.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Franziska Heiß erarbeitet*/

namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let movingObjects: MovingObjects[] = [];
    let n: number = 7;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", InsertNewObject);

        // Hintergrundbild-Funktion

        environment();
        
        // Hintergrund in der Variable speichern
        
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // For-Schleifen für die Luftblasen

        for (let i: number = 0; i < 10; i++) {
            let bubbles: BubblesOne = new BubblesOne();
            movingObjects.push(bubbles);
        }

        for (let i: number = 0; i < 16; i++) {
            let bubbles: BubblesTwo = new BubblesTwo();
            movingObjects.push(bubbles);
        }
        
        for (let i: number = 0; i < 16; i++) {
            let bubbles: BubblesThree = new BubblesThree();  
            movingObjects.push(bubbles);
        }

        // For-Schleife für die großen Fische

        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            movingObjects.push(fish);
        }

        // For-Schleife für die kleinen Fische

        for (let i: number = 0; i < 5; i++) {
            let fish: LittleFish = new LittleFish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            movingObjects.push(fish);
        }

        // Aufruf der Animate-Funktion
        
        animate();
    }//init

    // InsertNewObject - Mausposition im Canvas
    
    function InsertNewObject(_event: MouseEvent): void {
        let newPositionX: number = _event.clientX;
        let newPositionY: number = _event.clientY;   
        
        let flakes: Flakes = new Flakes(newPositionX, newPositionY);
        movingObjects.push(flakes);
    }
    
    // Animate-Funktion
    
    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
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
}