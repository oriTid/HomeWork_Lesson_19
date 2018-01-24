var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Workers = /** @class */ (function (_super) {
    __extends(Workers, _super);
    function Workers(fullname, age, id, isIMale) {
        var _this = _super.call(this, fullname, age, id, isIMale) || this;
        _this._sallary = Cinema.random(5000, 25000);
        return _this;
    }
    Object.defineProperty(Workers.prototype, "sallary", {
        get: function () {
            return this._sallary;
        },
        set: function (x) {
            this._sallary = x;
        },
        enumerable: true,
        configurable: true
    });
    //////// Methods /////////
    Workers.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.fullName + " is a Worker with Sallary of " + this.sallary + " Bitcoins</br>");
    };
    return Workers;
}(Person));
//# sourceMappingURL=Worker.js.map