namespace Aufgabe11 {
    export class BubbleTwo extends BubbleOne {

        constructor() {
            super();
        }

        move(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 650;
            }
        }

        setRandomPosition(): void {
            this.x = Math.random() * (100 - 150) + 100;
            this.y = Math.random() * (700 - 100) + 300;
            this.radius = Math.random() * 8;
        }
    }
}
