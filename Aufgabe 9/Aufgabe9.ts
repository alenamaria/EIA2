namespace Aufgabe9 {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        background();
        drawBigSeaGrass(700, 550);
        drawBigSeaGrass(300, 570);
        drawSmallSeaGrass(760, 600);
        drawSmallSeaGrass(270, 630);
        drawRocks();
        drawSand();
        drawBigSeaGrass(65, 720);
        drawSmallSeaGrass(45, 800);
        //drawBubble();
        
        drawChest();
                
        drawAnchor();
        
        for (let i: number = 0; i < 16; i++) {
            let v: number = Math.random() * (700 - 750) + 750;
            let w: number = Math.random() * 500;
            let r: number = Math.random() * 10;
            drawBubble(v, w, r);
        }
        
        for (let i: number = 0; i < 11; i++) {
            let v: number = Math.random() * (100 - 150) + 100;
            let w: number = Math.random() * (600 - 100) + 300;
            let r: number = Math.random() * 8; // Radius
            drawBubble(v, w, r);
        }
        
        for (let i: number = 0; i < 10; i++) {
            let v: number = Math.random() * (300 - 350) + 330;
            let w: number = Math.random() * (400 - 100) + 200;
            let r: number = Math.random() * 8; // Radius
            drawBubble(v, w, r);
        }
        
        for (let i: number = 0; i < 7; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            drawFish(x, y);
        }
    }
    
    function background(): void {
        
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#bde8dc");
        gradient.addColorStop(1, "#30547a");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 700);
  
    }

    function drawFish(_x: number, _y: number): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(300, 550, 300, 500);
        gradient.addColorStop(0, "#10938d");
        gradient.addColorStop(1, "#57d1cb");
        crc2.fillStyle = gradient;

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 45, _y + 50, _x + 100, _y);
        crc2.lineTo(_x + 130, _y + 25);
        crc2.lineTo(_x + 120, _y);
        crc2.lineTo(_x + 130, _y - 25);
        crc2.lineTo(_x + 100, _y);
        crc2.quadraticCurveTo(_x + 45, _y - 50, _x, _y);
        crc2.strokeStyle = "transparent";
        crc2.stroke();
        crc2.fill();

    }

    function drawBubble(_x: number, _y: number, _r: number): void {

        crc2.fillStyle = "rgb(206, 220, 226, 0.6)";

        crc2.beginPath();
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        
        crc2.strokeStyle = "transparent";
        crc2.stroke();
    }
  
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
    
    function drawChest(): void {
        
        // Part 1
        crc2.fillStyle = "rgb(109, 77, 35)";
        
        crc2.beginPath();
        crc2.moveTo(700, 500);
        crc2.lineTo(700, 550);
        crc2.lineTo(750, 550);
        crc2.lineTo(750, 500);
        crc2.closePath();
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        // Part 2
        crc2.fillStyle =  "rgb(89, 63, 29)";
        
        crc2.beginPath();
        crc2.moveTo(800, 600);
        crc2.lineTo(750, 550);
        crc2.lineTo(750, 500);
        crc2.lineTo(800, 550);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        // Part 3
        crc2.fillStyle = "rgb(130, 89, 36)";
        
        crc2.beginPath();
        crc2.moveTo(700, 500);
        crc2.lineTo(700, 550);
        crc2.lineTo(750, 600);
        crc2.lineTo(750, 550);
        crc2.closePath();
        crc2.fill();
    
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        // Part 4
        crc2.fillStyle = "rgb(142, 100, 45)";
        
        crc2.beginPath();
        crc2.moveTo(750, 550);
        crc2.lineTo(800, 550);
        crc2.lineTo(800, 600);
        crc2.lineTo(750, 600);
        crc2.closePath();
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        // Part 5
        crc2.fillStyle =  "rgb(114, 81, 39)";
        
        crc2.beginPath();
        crc2.moveTo(800, 550);
        crc2.lineTo(825, 510);
        crc2.lineTo(775, 460);
        crc2.lineTo(750, 500);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();

        // Deckel 3D - vorne
        
        crc2.fillStyle =  "rgb(142, 100, 45)";
        
        crc2.beginPath();
        crc2.moveTo(800, 550);
        crc2.quadraticCurveTo(830, 540, 825, 510);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        // Deckel 3D - hinten
        
        crc2.fillStyle =  "rgb(99, 72, 36)";
        
        crc2.beginPath();
        crc2.moveTo(750, 500);
        crc2.quadraticCurveTo(780, 490, 775, 460);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";
        crc2.stroke();
        
    }
    
    function drawAnchor(): void {
        
        crc2.fillStyle = "#282c2d";

        crc2.beginPath();
        crc2.moveTo(670, 520);
        crc2.lineTo(670, 550);
        crc2.quadraticCurveTo(655, 570, 640, 550);
        crc2.lineTo(635, 555);
        crc2.quadraticCurveTo(670, 585, 710, 555);
        crc2.lineTo(705, 550);
        crc2.quadraticCurveTo(690, 570, 675, 550);
        crc2.lineTo(675, 520);
        crc2.lineTo(680, 520);
        crc2.lineTo(680, 515);
        crc2.lineTo(675, 515);
        crc2.lineTo(675, 510);
        crc2.lineTo(670, 510);
        crc2.lineTo(670, 515);
        crc2.lineTo(665, 515);
        crc2.lineTo(665, 520);
        crc2.closePath();
        crc2.strokeStyle = "#282c2d";
        crc2.stroke();
        crc2.fill();

    }
    
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
    
    function drawSmallSeaGrass(_a: number, _b: number): void {
        
        crc2.fillStyle = "#527c4f";
        
        // a=700 und b= 550
        
        crc2.beginPath();
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