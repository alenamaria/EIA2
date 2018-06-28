var L11_Inheritance;
(function (L11_Inheritance) {
    class DavidStarBlue extends L11_Inheritance.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.x += 2;
            this.y -= 1;
        }
    }
    L11_Inheritance.DavidStarBlue = DavidStarBlue;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=DavidStar_blue.js.map