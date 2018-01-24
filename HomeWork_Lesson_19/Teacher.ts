class Teacher extends Person {

    private _vetek: number;
    private _profession: string;


    constructor(fullname: string, age: number, id: number, isIMale: boolean) {

        super(fullname, age, id, isIMale);
        this._vetek = Cinema.random(10, 55);
        this._profession = "Teacher of all teachers";
    }


    get vetek() {
        return this._vetek;
    }

    set vetek(x: number) {
        this._vetek = x;
    }

    get profession() {
        return this._profession;
    }

    set profession(x: string) {
        this._profession = x;
    }


    //////// Methods /////////

    public print(): void {

        super.print();
        document.write(`${this.fullName} is a Teacher with ${this.vetek} years experience in this area : ${this.profession } </br>`);
            }

}