

var signs = document.getElementsByClassName("signs");

Array.prototype.forEach.call(signs, function(el) {
    
    var showOnHoverText =el.parentNode.childNodes[5];
    console.log(showOnHoverText);
              el.addEventListener("mouseover", function(){
          showOnHoverText.style.display = "block";
             });

             el.addEventListener("mouseout", function(){

                showOnHoverText.style.display = "none";
                   });
});

// var myImg = document.getElementsByClassName('photo');
// for(var i = 0; i < myImg.length; i ++){
//             myImg[i].addEventListener('click', function(evt){
//                 var baliBody = document.getElementsByClassName('bali-body')
//                 var popUp = document.createElement('div')
//                 popUp.classList.add('popup');
//                 document.body.append(popUp);
            
//                 var img = document.createElement('img');
//                 img.style.width = '100%'
//                 img.style.height = '100%'
//                 popUp.append(img);
//                 img.src = evt.target.src
            
//                 var myBotton = document.createElement('bottom');
//                 myBotton.id = "myBtn";
//                 myBotton.style.cursor = 'pointer';
//                 popUp.appendChild(myBotton);
//                 var exit = document.createElement('span');
//                 exit.style.position = " absolute";
//                 exit.style.top ='-16px'
//                 exit.style.right ='2px'
//                 exit.innerHTML = 'X';
//                  myBotton.append(exit);
            
//                  myBotton.addEventListener("click", function() {
//                     popUp.remove();
//                 })
            
            
//             })
//         };

// var album =['https://www.superodmor.rs/data/images/2016-11-14/126885_maldivi-shutterstock345773612_origh.jpg?ver=1479131063', 'http://www.luxurytopics.com/chest/timg/1489578600_luksuz-turizam-odmor-destinacija-putovanje-maldivi%20(23).jpg', 'https://d2p1cf6997m1ir.cloudfront.net/media/places/countries/89/7f/37/4343/maldives-by-air.jpg']

// for(var i = 0; i < album.length; i++){
//   var photos =document.getElementsByClassName('photos');
//   console.log(photos)
//   var flex = document.createElement('div');
//   flex.classList.add('flex');
//   photos.append(flex);

//   var photo = document.createElement('img');
//   // photo.src = album[i];
//   photo.classList.add('photo');
//   flex.appendChild(photo);
// }



function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    
  }


   var ceni = document.getElementById('ceni');
   var reservation = document.createElement('button');
   reservation.classList.add('reservation-but');
   reservation.innerHTML = 'Резервација';
   ceni.append(reservation);

   var clickForRes = document.createElement('div');
   clickForRes.id = 'res-info';
   clickForRes.innerHTML = 'Кликни за резервација';
   ceni.append(clickForRes);
  

    reservation.addEventListener('mouseover', function(){
      
      clickForRes.style.display = "block";
    })

    reservation.addEventListener("mouseout", function(event){
      clickForRes.style.display = "none";
    })

    

    reservation.addEventListener('click', function(){

     var popUpReservation = document.createElement('div');
     popUpReservation.id = 'popUp-reservation';
     ceni.append( popUpReservation);

     popUpReservation.style.display = "block";

     var title = document.createElement('div');
     title.id = 'title';
     popUpReservation.append(title);

     var innerTitle =  document.createElement('h3');
     innerTitle.innerHTML = "Резервација";
     title.append(innerTitle);
     


     var input1 = document.createElement('input');
     input1.id = 'input1';
     input1.placeholder = "First name"
     input1.setAttribute("type", "text");
     input1.classList.add('input-res')
     popUpReservation.append(input1);

     var input2 = document.createElement('input');
     input2.id = 'input2';
     input2.placeholder = "Last name"
     input1.setAttribute("type", "text");
     input2.classList.add('input-res');
     popUpReservation.append(input2);

     var select1 = document.createElement("SELECT");
     select1.classList.add('input-res');
     select1.setAttribute("id", "select1");
     popUpReservation.append(select1);

     var hotel = document.createElement("option");
     hotel.innerHTML = 'Хотел';
     select1.appendChild(hotel);

     var hotel1 = document.createElement("option");
     hotel1.innerHTML = 'The Asana Kuta';
     select1.appendChild(hotel1);
     
     var hotel2 = document.createElement("option");
     hotel2.innerHTML = 'Wina Kuta';
     select1.appendChild(hotel2);

     var hotel3 = document.createElement("option");
     hotel3.innerHTML = 'Taman Agung';
     select1.appendChild(hotel3);

     var hotel4 = document.createElement("option");
     hotel4.innerHTML = 'Ibis Style Beona Nusa Dua';
     select1.appendChild(hotel4);

     var hotel5 = document.createElement("option");
     hotel5.innerHTML = 'Bumas Hotel Sanur';
     select1.appendChild(hotel5);

     var select2 = document.createElement("SELECT");
     select2.classList.add('input-res');
     select2.setAttribute("id", "select2");
     popUpReservation.append(select2);

     var data = document.createElement("option");
     data.innerHTML = 'Датум';
     select2.appendChild(data);

     var data1 = document.createElement("option");
     data1.innerHTML = '18.06 - 27.06 (9 ноќи)';
     select2.appendChild(data1);
     
     var data2 = document.createElement("option");
     data2.innerHTML = '16.07 - 25.07 (9 ноќи)';
     select2.appendChild(data2);

     var data3 = document.createElement("option");
     data3.innerHTML = '27.08 - 05.09 (9 ноќи)';
     select2.appendChild(data3);

     var select3 = document.createElement("SELECT");
     select3.classList.add('input-res');
     select3.setAttribute("id", "select3");
     popUpReservation.append(select3);

     var sobi = document.createElement("option");
     sobi.innerHTML = 'Соби';
     select3.appendChild(sobi);

     var sobi1 = document.createElement("option");
     sobi1.innerHTML = 'двокреветна';
     select3.appendChild(sobi1);
     
     var sobi2 = document.createElement("option");
     sobi2.innerHTML = 'трокреветна';
     select3.appendChild(sobi2);


     var myBotton = document.createElement('bottom');
                myBotton.id = "myBtn";
                myBotton.style.cursor = 'pointer';
                popUpReservation.appendChild(myBotton);
                var exit = document.createElement('span');
                exit.style.position = " absolute";
                exit.style.top ='-16px'
                exit.style.right ='2px'
                exit.innerHTML = 'X';
                 myBotton.append(exit);
            
                 myBotton.addEventListener("click", function() {
                  popUpReservation.remove();
                })
      var submit = document.createElement("button");
      submit.innerHTML = 'Резервирај';
      submit.classList.add('submit');
      submit.setAttribute("type", "submit");
      popUpReservation.appendChild(submit);


      submit.addEventListener('click', function(){
        var siteName = document.getElementById('input1').value;
        var siteLast = document.getElementById('input2').value;
        var select1 = document.getElementById('select1').value;
        var select2 = document.getElementById('select2').value;
        var select3 = document.getElementById('select3').value;
        console.log(siteName)
 
        var user = {
          name: siteName,
          lastName: siteLast,
          hotel: select1,
          datum: select2,
          sobi: select3

        }
 
        if(localStorage.getItem(users) === null){
          var users = [];
          users.push(user);
 
          localStorage.setItem('users', JSON.stringify(users));
        }
        else{
          var users =JSON.parse(localStorage.getItem('users'));
          users.push(user);
 
          localStorage.setItem('users', JSON.stringify(users));
        }
        
      })
      
    })

   
    


   
  

























