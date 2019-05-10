var ski = document.getElementById('ski')
    
    var show = document.getElementsByClassName('icon_desc')[0];
    

    ski.addEventListener("mouseover", function(){
      show.style.display = "block";
    });

    ski.addEventListener("mouseout", function(){
      show.style.display = "none";
    });

    var way = document.getElementById('way')
   
    var show1 = document.getElementById('show1');
     


    way.addEventListener("mouseover", function(){
        show1.style.display = "block";
      });
  
    way.addEventListener("mouseout", function(){
        show1.style.display = "none";
      });

      var bus = document.getElementById('bus')
      
      var show2 = document.getElementById('show2');
         
  
  
      bus.addEventListener("mouseover", function(){
          show2.style.display = "block";
        });
    
      bus.addEventListener("mouseout", function(){
          show2.style.display = "none";
        });  

var hotelBody = document.getElementsByClassName('hotel-body')[0];


var reservation = document.getElementById('reservation');


reservation.addEventListener("click", function(){
  var popUp = document.createElement('div');
  popUp.classList.add('popUp');
  hotelBody.append(popUp);
  popUp.style.display = "block";

  var title = document.createElement('div');
  title.id = 'title';
  popUp.append(title);

  var innerTitle =  document.createElement('h3');
  innerTitle.innerHTML = 'Доколку сте заинтересирани за некои од нашите понуди или имате прашање пополнете ги полињата за да резервирате,  а ние ќе ви одговориме во најкраток период.'
  title.append(innerTitle);

  var input1 = document.createElement('input');
     input1.id = 'input1';
     input1.placeholder = "First and last name"
     input1.setAttribute("type", "text");
     input1.classList.add('input-res')
     popUp.append(input1);

     var input2 = document.createElement('input');
     input2.id = 'input2';
     input2.placeholder = "E-mail"
     input1.setAttribute("type", "text");
     input2.classList.add('input-res');
     popUp.append(input2);

     var input3 = document.createElement('input');
     input3.id = 'input3';
     input3.placeholder = "Телефон"
     input1.setAttribute("type", "text");
     input3.classList.add('input-res');
     popUp.append(input3);

     var select1 = document.createElement("SELECT");
     select1.classList.add('input-res');
     select1.setAttribute("id", "select1");
     popUp.append(select1);

     var rooms = document.createElement("option");
     rooms.innerHTML = 'Соби';
     select1.appendChild(rooms);

     var ednokrevetna = document.createElement("option");
     ednokrevetna.innerHTML = 'Еднокреветна';
     select1.appendChild(ednokrevetna);
     
     var dvokrevetna = document.createElement("option");
     dvokrevetna.innerHTML = 'Двокреветна';
     select1.appendChild(dvokrevetna);

     var trokrevetna = document.createElement("option");
     trokrevetna.innerHTML = 'Трокреветна';
     select1.appendChild(trokrevetna);

     var select2 = document.createElement("SELECT");
     select2.setAttribute("id", "select2");
     select2.classList.add('input-res');
     popUp.append(select2);

     var nights = document.createElement("option");
     nights.innerHTML = 'Ноќевања';
     select2.appendChild(nights);

     var oneNight= document.createElement("option");
     oneNight.innerHTML = '1 ноќевањe';
     select2.appendChild(oneNight);
     
     var twoNights= document.createElement("option");
     twoNights.innerHTML = '2 ноќевања';
     select2.appendChild(twoNights);

     var threeNights= document.createElement("option");
     threeNights.innerHTML = '3 ноќевања';
     select2.appendChild(threeNights);

     var fourNights= document.createElement("option");
     fourNights.innerHTML = '4 ноќевања';
     select2.appendChild(fourNights);

     var fiveNights= document.createElement("option");
     fiveNights.innerHTML = '5 ноќевања';
     select2.appendChild(fiveNights);

     var sixNights= document.createElement("option");
     sixNights.innerHTML = '6 ноќевања';
     select2.appendChild(sixNights);

     var sevenNights= document.createElement("option");
     sevenNights.innerHTML = '7 ноќевања';
     select2.appendChild(sevenNights);

     var myBotton = document.createElement('bottom');
       myBotton.id = "myBtn";
      myBotton.style.cursor = 'pointer';
      popUp.appendChild(myBotton);
          var exit = document.createElement('span');
          exit.style.position = " absolute";
          exit.style.top ='-16px'
           exit.style.right ='2px'
           exit.innerHTML = 'X';
            myBotton.append(exit);
            
      myBotton.addEventListener("click", function() {
       popUp.remove();
       save.style.display = "none";
      })

   
      var save = document.getElementsByClassName('button-bird')[0];
      save.style.display = "block";

    //  var save = document.createElement('button') 
    //  save.classList.add('button-bird')
    //  save.id = 'save'
    //  save.innerHTML = 'Save';
    //  save.style.width = '100px';
    //  save.style.height = '50px';
    //  popUp.append(save);

    //  var textBut = document.createElement('p') 
    //  textBut.classList.add('button-bird__text')
    //  textBut.innerHTML = 'Испрати'
    //  save.append(textBut);

    //  var NS="http://www.w3.org/2000/svg"
    //  var svg = document.createElement( NS, 'svg') 
    //  svg.classList.add('feather')
    //  svg.width='0px';
    //  svg.height='0px';
     
    //  save.append(svg);

     save.addEventListener('click', function(){
       var siteName = document.getElementById('input1').value;
       var sitePhone = document.getElementById('input3').value;
       var eMail = document.getElementById('input2').value;
       console.log(eMail)
       var select1 = document.getElementById('select1').value;
       var select2 = document.getElementById('select2').value;
       

       var bookmark = {
         name: siteName,
         mail: eMail,
         phone: sitePhone,
         sobi: select1,
         nights: select2
       }

       if(localStorage.getItem(bookmarks) === null){
         var bookmarks = [];
         bookmarks.push(bookmark);

         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
       }
       else{
         var bookmarks =JSON.parse(localStorage.getItem('bookmarks'));
         var bookmarks = [];
         bookmarks.push(bookmark);

         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
       }

      //  var el = document.getElementsByClassName('button-bird')[0];
      // console.log(el)
      // var text = document.getElementsByClassName(".button-bird__text")[0];
  
      
      //      el.addEventListener('click', function() {
      //        el.classList.toggle('active');
 
      //        if(el.classList.contains('active')){
      //          console.log('true');
      //          text.innerHTML = 'DONE';
      //        }else{
      //          text.innerHTML = 'SEND';
      //        }
      //       });

     
      
       
     })

     var el = document.querySelector(".button-bird");
     var text = document.querySelector(".button-bird__text");
         el.addEventListener('click', function() {
           el.classList.toggle('active');

           if(el.classList.contains('active')){
             console.log('true');
             text.innerHTML = 'DONE';
           }else{
             text.innerHTML = 'SEND';
           }
       });

     
    
}); 



// var butSend = document.getElementById('wrapper-no4')
// butSend.addEventListener("DOMContentLoaded", function(){
//   var el = document.querySelector(".button-bird");
//   var text = document.querySelector(".button-bird__text");
//       el.addEventListener('click', function() {
//         el.classList.toggle('active');

//         if(el.classList.contains('active')){
//           console.log('true');
//           text.innerHTML = 'DONE';
//         }else{
//           text.innerHTML = 'SEND';
//         }
//     });
// });
