class Cinema {

    private _theatreName: string;
    private _ticketCost: number;
    private _studentDiscount: number;
    private _teacherDiscount: number;

    constructor(theatrename: string) {
        this._theatreName = theatrename;
        this._ticketCost = Cinema.random(30, 200);
        this._studentDiscount = Cinema.random(10, 20);
        this._teacherDiscount = Cinema.random(5, 10);

    }

    get theatreName() {
        return this._theatreName;
    }

    get studentDicount() {
        return this._studentDiscount;
    }

    get teacherDiscount() {
        return this._teacherDiscount;
    }
    get ticketcost() {
        return this._ticketCost;
    }

    set ticketcost(x: number) {
        if (x >= 30 && x <= 200) this._ticketCost = x;
        else this._ticketCost = 100;
    }


    ////////// Methods ////////


    public static random(min: number, max: number): number {
        let r: number = (Math.random() * (max - min)) + min;
        return Math.floor(r);
    }






}