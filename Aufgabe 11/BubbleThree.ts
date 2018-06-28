namespace Aufgabe11 {
    export class BubbleThree extends BubbleOne {

        constructor() {
            super();
        }
        
        move(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 480;
            }
        }
        
         setRandomPosition(): void {
            this.x = Math.random() * (700 - 750) + 750;
            this.y = Math.random() * 500;
            this.radius = Math.random() * 10;
        }
    }
}