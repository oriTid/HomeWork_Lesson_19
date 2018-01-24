class Person {

    private _fullName: string;
    private _age: number;
    private _iD: number;
    private _isMale: boolean;


    constructor(Fullname: string, age: number, id: number, isIMale: boolean) {

        this._fullName = Fullname;
        this._age = age;
        this._iD = id;
        this._isMale = isIMale;
    }

    get fullName() {
        return this._fullName
    }

    set fullName(x: string) {
        this._fullName = x;
    }

    get age() {
        return this._age
    }

    set age(x: number) {
        if (x > 0 && x <= 120) {
            this._age = x;
        }
        else this._age = 12;

    }

    get ID() {
        return this._iD
    }

    set ID(x: number) {
        if (x.toString().length <= 9){
            this._iD = x;
        }
        else this._iD = 123456789;
        
    }

    get IsMale() {
        return this._isMale;
    }


    set IsMale(x: boolean) {
        if (x) this._isMale = true;
        else this._isMale = false;

    }


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

    public print(): void {

        document.write(`Full name : ${this.fullName}</br>`);
        document.write(`ID number : ${this.ID}</br>`);
        document.write(`Age : ${this.age}</br>`);
        if (this.IsMale) document.write(`Gender is Male</br>`);
        else document.write(`Gender is Female</br>`);

    }

}


