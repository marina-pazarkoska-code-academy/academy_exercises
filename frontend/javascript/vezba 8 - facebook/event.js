function Event(id){
    this.name = "Event - " + id;
    this.registeredHuman = [];

    this.inviteUsers = function(human) {
        for (var index = 0; index < 5; index++){
            var pickedUser = getRandom (0, 49);
            human[pickedUser].raspondToInvite(this);
        }

    }
}