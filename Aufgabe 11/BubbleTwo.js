var Aufgabe11;
(function (Aufgabe11) {
    class BubbleTwo extends Aufgabe11.BubbleOne {
        constructor() {
            super();
        }
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 650;
            }
        }
        setRandomPosition() {
            this.x = Math.random() * (100 - 150) + 100;
            this.y = Math.random() * (700 - 100) + 300;
            this.radius = Math.random() * 8;
        }
    }
    Aufgabe11.BubbleTwo = BubbleTwo;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=BubbleTwo.js.map