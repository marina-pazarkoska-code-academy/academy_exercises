function Human(index, type) {
    this.name = type + "-" + index;
    this.money = type === "client" ? 3000 : 50;
    this.type = type;
    this.vacationDays = getRandomNumber(2, 7);

    this.clean = function(target) {
        target.isGettingCleaned();
    }
}