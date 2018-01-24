class Workers extends Person {

    private _sallary: number;


    constructor(fullname: string, age: number, id: number, isIMale: boolean) {

        super(fullname, age, id, isIMale);
        this._sallary = Cinema.random(5000, 25000);
    }


    get sallary() {
        return this._sallary;
    }

    set sallary(x: number) {
        this._sallary = x;
    }


    //////// Methods /////////

    public print(): void {

        super.print();
        document.write(`${this.fullName} is a Worker with Sallary of ${this.sallary } Bitcoins</br>`);

    }

}