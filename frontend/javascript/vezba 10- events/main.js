// function suma(number1, number2, callback) {
//     var res = number1 + number2;
//     callback(res)

// }


// function report(result){
//     console.log("the result is", result);

// }

// function prettyReport(result){
//     console.log("sir, the result of your very smart calculation is this number: ", result)
// }

// var res = suma(45, 67, report);
// suma(35, 567, prettyReport);


//new exercise


// var testButton = document.createElement("button"); //----> osnova
// testButton.innerHTML = "Click me!";
// testButton.id = "test";
// testButton.classList.add("test-button");
// document.body.appendChild(testButton);


// testButton.addEventListener("click", function(event) {
//     console.log("yey im clicked!");
//     event.target.innerHTML = "I was clicked";
//     event.target.style.backgroundColor = "red";
//     event.target.style.color = "green";
// }); // ----> eden primer kako moze

// testButton.addEventListner("click" , function(){
//     alert ("yey, i'm clicked");
// }); -----> dr primer kako moze

//ili



// testButton.addEventListener("click" , alertTheUser);
 
// function alertTheUser(){
//     alert ("yey, i'm clicked");
// } ----> dr primer kako moze

// testButton.addEventListner("click" , function(){
//     suma(234,345)
// }); //----> call back funckija vo event
 



// function suma(a,b){
//     return a + b;
// }


// //exercise 1
// var kopce = document.createElement("button");
// var para = document.createElement("paragraph");
// kopce.innerHTML = "Klikni";
// para.innerHTML = "Ubav zivot";
// kopce.classList.add("probno-kopce");
// para.classList.add("proben-paragrav");
// document.body.appendChild(kopce);
// document.body.appendChild(para);

// kopce.addEventListener("click" , function(event){
//     event.target.style.color = "yellow";
//     event.target.style.fontSize = "20";
//     event.target.nextSibling.style.color = "pink";
// })

//exercises 2
// var resizeResult = document.createElement("div");
// document.body.appendChild(resizeResult);


// window.addEventListener("resize", function(){
//     resizeResult.innerHTML = "Height" + window.innerHeight + " and width is " + window.innerWidth; 
// });



// var resizeResult = document.createElement("div");
// document.body.appendChild(resizeResult);
// window.addEventListener("resize", function(){
//     resizeResult.innerHTML = "Height " + window.innerHeight + " and width is " + window.innerWidth; 
// });


var first = document.createElement("input");
first.classList.add = "ime";
first.placeholder = "First Name";
document.body.appendChild(first);
var last = document.createElement("input");
last.classList.add = "prezime";
last.placeholder = "Last Name";
document.body.appendChild(last);
var email = document.createElement("input");
email.placeholder = "Email";
email.classList.add = "email";
email.setAttribute("type", "email");
document.body.appendChild(email);
var pass = document.createElement("input");
pass.placeholder = "Password";
pass.classList.add = "password";
document.body.appendChild(pass);

var kopce = document.createElement("button");
kopce.innerHTML= "Klikni";
kopce.classList.add = "kopce";
document.body.appendChild(kopce);



kopce.addEventListener("click", function (){
    var user = {
        firstName: first.value,
        lastName: last.value,
        email: email.value,
        password:pass.value
    }
    console.log(user);
});


