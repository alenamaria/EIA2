namespace Aufgabe11 {
    export class BubblesThree extends BubblesOne {

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
    }
}