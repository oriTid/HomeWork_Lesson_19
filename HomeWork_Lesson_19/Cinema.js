var Cinema = /** @class */ (function () {
    function Cinema(theatrename) {
        this._theatreName = theatrename;
        this._ticketCost = Cinema.random(30, 200);
        this._studentDiscount = Cinema.random(10, 20);
        this._teacherDiscount = Cinema.random(5, 10);
    }
    Object.defineProperty(Cinema.prototype, "theatreName", {
        get: function () {
            return this._theatreName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "studentDicount", {
        get: function () {
            return this._studentDiscount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "teacherDiscount", {
        get: function () {
            return this._teacherDiscount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "ticketcost", {
        get: function () {
            return this._ticketCost;
        },
        set: function (x) {
            if (x >= 30 && x <= 200)
                this._ticketCost = x;
            else
                this._ticketCost = 100;
        },
        enumerable: true,
        configurable: true
    });
    ////////// Methods ////////
    Cinema.random = function (min, max) {
        var r = (Math.random() * (max - min)) + min;
        return Math.floor(r);
    };
    return Cinema;
}());
//# sourceMappingURL=Cinema.js.map