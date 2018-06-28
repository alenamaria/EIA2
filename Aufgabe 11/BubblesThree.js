var Aufgabe11;
(function (Aufgabe11) {
    class BubblesThree extends Aufgabe11.BubblesOne {
        constructor() {
            super();
        }
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 480;
            }
        }
        setRandomPosition() {
            this.x = Math.random() * (700 - 750) + 750;
            this.y = Math.random() * 500;
            this.radius = Math.random() * 10;
        }
    }
    Aufgabe11.BubblesThree = BubblesThree;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=BubblesThree.js.map