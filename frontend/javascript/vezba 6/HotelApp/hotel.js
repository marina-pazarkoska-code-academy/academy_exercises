function Hotel (){
    this.earnings = 0;
    this.rooms = [];
    this.employees = [];
    this.guests = 0;

    this.work = function() {
        for (var i = 0; i < this.rooms.length; i++) {
            var hotelRoom = this.rooms[i];
            hotelRoom.spendDay();
        }

        for (var j = 0; j < this.employees.length; j++) {
            var employee = this.employees[j];
            for (var k = 0; k < this.rooms.length; k++) {
                var room = this.rooms[k];
                if (!room.isTaken && !room.isClean) {
                    this.earnings += room.bill;
                    employee.clean(room);
                    break;
                }
            }
        }
    }

    this.takeInGuest = function(guest) {
        for (var room = 0; room < this.rooms.length; room++) {
            if (!this.rooms[room].isTaken && this.rooms[room].isClean) {
                this.rooms[room].takeClient(guest);
                this.guests++;
                break;
            }
        }
    }

    this.generateEmployees = function() {
        for (var index = 1; index <= 10; index++) {
            var employee = new Human(index, "employee");
            this.employees.push(employee);
        }
    }

    this.generateRooms = function() {
        for (var index = 1; index <= 100; index++) {
            var room = new Room(index);
            this.rooms.push(room);
        }
    }

    this.generateRooms();
    this.generateEmployees();
}