
let cinema1: Cinema = new Cinema("Yes Planet");
let people: Array<Person> = new Array<Person>(15);

initPeople(people);

fullCalc(people, cinema1);




///////////// Functions ///////////

function initPeople(x: Array<Person>): void {

    for (let i = 0; i < x.length; i++) {
        let rnd: number = Cinema.random(0, 3);
        switch (rnd) {
            case 0: x[i] = new Students("Ori Tidhar", Cinema.random(10, 40), Cinema.random(111111111, 999999999), true);
                break;

            case 1: x[i] = new Teacher("Alex Kush", Cinema.random(25, 60), Cinema.random(111111111, 999999999), true);
                break;

            case 2: x[i] = new Workers("Mor Pinkus", Cinema.random(18, 67), Cinema.random(111111111, 999999999), false);
                break;
        }

    }



}

function fullCalc(people: Array<Person>, cinema: Cinema): void {

    let totalSum: number = 0;
    let totalWorkers: number = 0;
    let totalStudents: number = 0;
    let totalTeachers: number = 0;

    for (let i = 0; i < people.length; i++) {

        if (people[i] instanceof Workers) {
            totalSum += cinema.ticketcost;
            totalWorkers++;
        }
        if (people[i] instanceof Students) {
            totalSum += cinema.ticketcost - (cinema.ticketcost / 100 * cinema.studentDicount);
            totalStudents++;
        }

        if (people[i] instanceof Teacher) {
            totalSum += cinema.ticketcost - (cinema.ticketcost / 100 * cinema.teacherDiscount);
            totalTeachers++;
        }

    }

    document.write(`Today's Cinema name is : ${cinema.theatreName}</br></br>`);
    document.write(`Today's revenues are : ${Math.round(totalSum)}₪</br>`);
    document.write(`Today's ticket cost is : ${cinema.ticketcost}₪</br>`);
    document.write(`Today's student discount is ${cinema.studentDicount}% and ticket cost is : ${Math.round(cinema.ticketcost - (cinema.ticketcost / 100 * cinema.studentDicount))}₪ </br>`);
    document.write(`Today's teacher discount is ${cinema.teacherDiscount}% and ticket cost is : ${Math.round(cinema.ticketcost - (cinema.ticketcost / 100 * cinema.teacherDiscount))}₪ </br></br>`);
    
    document.write(`Total number of people visited today is ${people.length}</br></br>`)
    document.write(`Total number of Workers visited today is ${totalWorkers}</br>`)
    document.write(`Total number of Students visited today is ${totalStudents}</br>`)
    document.write(`Total number of Teachers visited today is ${totalTeachers}</br></br>`)

    document.write(`Here are the full details of Today's visitors:</br>`)
    for (let i = 0; i < people.length; i++) {
        document.write(`</br>*************************** ${i+1} ************************</br>`);
        people[i].print();

    }

}