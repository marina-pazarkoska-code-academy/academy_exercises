function Room (number) {
    this.isClean = true;
    this.isTaken = false;
    this.minibar = 200;
    this.daysTaken = 0;
    this.price = 80;
    this.bill = 0;
    this.name = "Room No " + number;
    this.currentClient = null;

    this.takeClient = function(client) {
        this.isTaken = true;
        this.daysTaken = client.vacationDays;
        this.currentClient = client;
    }

    this.spendDay = function() {
        if (this.currentClient) {
            if (this.daysTaken >= 0) {
                this.daysTaken--;
                this.minibar -= 20;
                this.bill += this.price + 20;
            } else if (this.daysTaken < 0) {
                this.releaseRoom();
            }
        }
    }

    this.releaseRoom = function() {
        this.isClean = false;
        this.isTaken = false;
        this.currentClient.money -= this.bill;
        this.currentClient = null;
        this.daysTaken = 0;
    }

    this.isGettingCleaned = function() {
        this.isClean = true;
        this.minibar = 200;
        this.bill = 0;
    }
}