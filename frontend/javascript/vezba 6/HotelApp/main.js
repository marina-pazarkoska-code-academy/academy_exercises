function main() {
    var codeHotel = new Hotel();

    for (var days = 1; days <= 30; days++) {

        if (days % 3 === 0) {
            var hiredEmployees = getRandomNumber(1, 3);
            for (var index = 1; index <= hiredEmployees; index++) {
                var employee = new Human(index, "employee");
                codeHotel.employees.push(employee);
            }
        }

        var numberOfGuests = getRandomNumber(2, 8);
        for (var guests = 1; guests <= numberOfGuests; guests++) {
            var client = new Human(guests, "client");
            codeHotel.takeInGuest(client);
        }
        
        codeHotel.work();
    }

    console.log(codeHotel);
}

main();