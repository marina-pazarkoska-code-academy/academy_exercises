function Renderer(person) {
    this.user = person;

    
    this.renderLeft = function(){
        var left =  document.createElement("div");
        left.classList.add("left");
        document.body.append(left);
        
        var profileImg = document.createElement("div");
        profileImg.classList.add("profile-img");
        var img = document.createElement("img");
        img.classList.add("img-left");
        profileImg.appendChild(img);
        img.src = this.user.profilePhoto.url;
        left.append(profileImg);
    
    
        var biography =  document.createElement("div");
        biography.classList.add("biography");
        biography.innerHTML = this.user.bio.title;
        
        left.append(biography);

    }

    
    this.renderRight = function(){
        var right = document.createElement("div");
        right.id = "right-container";
        right.classList.add("right");
        document.body.append(right);

        this.rednderAlbum();
        this.renderStories();
    }

    this.rednderAlbum = function(){
        var right = document.getElementById("right-container");

        var flex = document.createElement("div");
        flex.classList.add("flex");
        right.append(flex);
        
        
      for(var i = 0; i < this.user.album.length; i++){
        var flex_part = document.createElement("div");
        flex_part.classList.add("flex-part");

          flex.append(flex_part);

          const imageData = this.user.album[i];
          var image = document.createElement("img");
          image.classList.add("flex-img");
          image.src = imageData.url;
          image.alt = imageData.altText;
          flex_part.append(image);


          flex_part.addEventListener("mousemove", function(event){
          event.target.style.width = "200px";
          event.target.style.height = "200px";
          event.target.style.transition ="3s";
        
         

        });

        flex_part.addEventListener("mouseout", function(event){
            event.target.style.width = "130px";
            event.target.style.height = "100px";
            event.target.style.transition ="0.5s";
            
           
  
          });

         image.addEventListener("click", function(){
            var popupDiv = document.createElement('div');
            popupDiv.classList.add('popup');
            document.body.append(popupDiv);

            var img_popup = document.createElement("img");
            img_popup.classList.add("img-popup");
            img_popup.src = imageData.url;

            var button1 =document.createElement('a');
            button1.id = 'leftArrow';
            button1.innerHTML = '<'

            var button2 =document.createElement('a');
            button2.id = 'rightArrow';
            button2.textContent = ">"
            
            var myBotton = document.createElement('bottom');
            myBotton.id = "myBtn";
            popupDiv.appendChild(myBotton);
            var exit = document.createElement('span');
            exit.innerHTML = 'X';
            exit.id = 'exit';
            myBotton.append(exit);

          
            popupDiv.append(img_popup);
            popupDiv.append(button1);
            popupDiv.append(button2);

            myBotton.addEventListener("click", function() {
            popupDiv.remove();})

            // $(document).on("click", "#rightArrow", (event) => {

            //     let myNext = parseInt($(event.target).siblings("img").attr("id")) + 1;
            //     if (myNext == 10) myNext = 0;
            //     let nextImage = this.user.album.find(photo => photo.id === myNext);
            //     $(event.target).siblings("img").attr("src", nextImage.url);
            //     $(event.target).siblings("img").attr("id", nextImage.id);
    
            // })


            

            
    
         });
         

      

        
    
        





      
        
        
        //  $("<img>").attr("src", image.url).attr("id", image.id).appendTo($("popup"));
        
        //   var popup = $("<div>").addClass("popup").css("position", "absolute").appendTo($("body")).hide();
        //   var button1 = $("<button>").attr("id", "prev").html("prev");
        //   var button2 = $("<button>").attr("id", "next").html("next");
        //   popup.append("button1").append("button2");

        //   $("img").on("click", (event) => {
        //       var imageId = parseInt(event.target.id);
        //       var imageData = this.user.album.find(photo => photo.id === imageId);
        //       var popupImage = $("<img>").attr("src", imageData.url);
        //       popup.find("img").remove();
        //       popup.append(popupImage).show();
        //   }) 
        // $("#next").on("click", (event)=>{
        //     var nextImageId = parseInt($(event.target).siblings("img").attr("id")) + 1;
        //     var imageData = this.user.album.find(photo => photo.id === nextImageId);
        //     var popupImage = $("<img>").attr("src", imageData.url).attr("id", imageData.id);
        //     popup.find("img").remove();
        //     popup.append(popupImage);
        // })

        
    }
}

        this.renderStories = function(){
            var right = document.getElementById("right-container");
         var posts = document.createElement("div");
         posts.classList.add("posts");
         right.append(posts);
    
         for(var i = 0; i < 3; i++){
            var post = document.createElement("div");
            var kopce = document.createElement("button");
            kopce.classList.add("kopce");
            kopce.innerHTML= this.user.story[i].description;
            post.append(kopce);
            post.classList.add("post");
            posts.append(post);

            $("button").on("click", function() {
                $(this).closest(".post").remove();
            })
    
        }
    }






    this.renderAll = function(){
        this.renderLeft();
        this.renderRight();
    }

    }
    

