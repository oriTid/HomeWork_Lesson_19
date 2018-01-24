var Person = /** @class */ (function () {
    function Person(Fullname, age, id, isIMale) {
        this._fullName = Fullname;
        this._age = age;
        this._iD = id;
        this._isMale = isIMale;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (x) {
            this._fullName = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (x) {
            if (x > 0 && x <= 120) {
                this._age = x;
            }
            else
                this._age = 12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "ID", {
        get: function () {
            return this._iD;
        },
        set: function (x) {
            if (x.toString().length <= 9) {
                this._iD = x;
            }
            else
                this._iD = 123456789;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "IsMale", {
        get: function () {
            return this._isMale;
        },
        set: function (x) {
            if (x)
                this._isMale = true;
            else
                this._isMale = false;
        },
        enumerable: true,
        configurable: true
    });
    //////////// Methods ////////
    //public digits_count(n: number): number {
    //    let count = 0;
    //    if (n > 1)++count;
    //    while (n / 10 >= 1) {
    //        n /= 10;
    //        ++count;
    //    }
    //    return count;
    //}
    Person.prototype.print = function () {
        document.write("Full name : " + this.fullName + "</br>");
        document.write("ID number : " + this.ID + "</br>");
        document.write("Age : " + this.age + "</br>");
        if (this.IsMale)
            document.write("Gender is Male</br>");
        else
            document.write("Gender is Female</br>");
    };
    return Person;
}());
//# sourceMappingURL=Person.js.map