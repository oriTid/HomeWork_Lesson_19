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
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(fullname, age, id, isIMale) {
        var _this = _super.call(this, fullname, age, id, isIMale) || this;
        _this._vetek = Cinema.random(10, 55);
        _this._profession = "Teacher of all teachers";
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "vetek", {
        get: function () {
            return this._vetek;
        },
        set: function (x) {
            this._vetek = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "profession", {
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
    Teacher.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.fullName + " is a Teacher with " + this.vetek + " years experience in this area : " + this.profession + " </br>");
    };
    return Teacher;
}(Person));
//# sourceMappingURL=Teacher.js.map