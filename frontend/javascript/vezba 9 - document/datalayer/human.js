function Human (index){
    this.name =  "Person - " + index;
    this.profilePhoto = new Photo(true);
    this.bio = new Story (true);
    this.album = [];
    this.story = [];

    this.raspondToInvite = function (socialEvent){
        socialEvent.registeredHuman.push(this);

    }
    

    this.generateAlbum = function() {
        for (var index = 0; index < 10; index++) {
            var photo = new Photo();
            this.album.push(photo);
        }
    }
    
        this.generateAlbum();


        this.generateStory = function() {
            for (var index = 0; index < 5; index++) {
                var story = new Story();
                this.story.push(story);
            }
        }
        
            this.generateStory();
    

}