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
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(fullname, age, id, isIMale) {
        var _this = _super.call(this, fullname, age, id, isIMale) || this;
        _this._location = "Tel Aviv";
        _this._profession = "Science";
        return _this;
    }
    Object.defineProperty(Students.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (x) {
            this._location = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "profession", {
        get: function () {
            return this._profession;
        },
        set: function (x) {
            this._profession = x;
        },
        enumerable: true,
        configurable: true
    });
    //////// Methods /////////
    Students.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.fullName + " is a Student for " + this.profession + "  in " + this.location + " </br>");
    };
    return Students;
}(Person));
//# sourceMappingURL=Student.js.map