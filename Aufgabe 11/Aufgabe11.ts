/*  Aufgabe: Aufgabe 9: Canvas - Seaworld
    Name: Alena Hurst
    Matrikel: 257742
    Datum: 17.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Franziska Heiß und Anna Lotz erarbeitet*/

namespace Aufgabe11 {
    
    window.addEventListener("load", init);
    
    export let crc2: CanvasRenderingContext2D;
    let movingObjects: MovingObjects[] = [];
    let n: number = 7;
    
    export let canvas: HTMLCanvasElement;
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
            let bubbles: BubbleOne = new BubbleOne();
            movingObjects.push(bubbles); 
            console.log("BubblesNew");
        }

        for (let i: number = 0; i < 16; i++) {
            let bubbles: BubbleTwo = new BubbleTwo();
            movingObjects.push(bubbles);
        }
        
        for (let i: number = 0; i < 16; i++) {
            let bubbles: BubbleThree = new BubbleThree();  
            movingObjects.push(bubbles);
        }

        // For-Schleife für die großen Fische

        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();           
            movingObjects.push(fish);
        }

        // For-Schleife für die kleinen Fische

        for (let i: number = 0; i < 5; i++) {
            let fish: LittleFish = new LittleFish();           
            movingObjects.push(fish);
        }

        // Aufruf der Animate-Funktion
        
        animate();
        
        console.log(BubbleOne);
        
    }//init

    // InsertNewObject - Mausposition im Canvas
    
    function InsertNewObject(_event: MouseEvent): void {
        let newPositionX: number = _event.clientX;
        let newPositionY: number = _event.clientY;   
        
        for (let i: number = 0; i < 4; i++) {
            let flakes: Flake = new Flake(newPositionX, newPositionY);
            movingObjects.push(flakes);
            newPositionX += Math.random() * 50; 
            newPositionX -= Math.random() * 50; 
            newPositionY += Math.random() * 40;         
        }
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