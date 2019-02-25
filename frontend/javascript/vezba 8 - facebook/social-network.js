function SocialNetwork(){
    this.humans = [];
    this.events = [];



    this.generatePeople = function() {
        for (var index = 0; index <= 50; index++) {
            var human = new Human (index);
            this.humans.push(human);
        }
    }

        this.generatePeople()


        this.generateEvent = function() {

            for (var index = 0; index <= 5 ; index++) {
                var event = new Event ();
                event.inviteUsers(this.humans);
                this.events.push(event);
            
            }
        }
        
            this.generateEvent()
        
}


