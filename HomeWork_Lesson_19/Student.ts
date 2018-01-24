class Students extends Person {

    private _location: string;
    private _profession: string;


    constructor(fullname: string, age: number, id: number, isIMale: boolean) {

        super(fullname, age, id, isIMale);
        this._location = "Tel Aviv";
        this._profession = "Science";
    }


    get location() {
        return this._location;
    }

    set location(x: string) {
        this._location = x;
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
        document.write(`${this.fullName} is a Student for ${this.profession}  in ${this.location} </br>`);

    }

}