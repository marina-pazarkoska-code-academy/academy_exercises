 function  decision(money) {
 if (money > 5000){
     alert("you are rich");
 }
 else if (money <= 5000){
    alert("you are poor");
 }
}

 var result = decision(3000);
 



function maxOfThree (a, b , c){
if (a>b && a>c){
alert(a); 
}
else if (b>a && b>c){
    alert (b);
}
else if (c>a && c>b){
    alert(c) ;
}
}
var result = maxOfThree (5, 10, 15);





// pr za parametar
//   function myFunction ( x,y ) {
//  var myVar= x*y
//  console.log(myVar)
//     alert()
// }

// myfunction (1,3)
// myfunction (2,5)

// pr za return
// function plostina(shirina, visina){
//     return shirina * visina;

// }

//  var result = plostina(4,5);

//  var golemPravoagolnik = plostina(60,75);
//  alert(golemPravoagolnik);



// pr za ScopeTest
//  var result = 8;
//  function scopeTest() {
//      var result = 0;
//  }

//  scopeTest()

//  alert(result)



// function helloWorld(lang){
//     if(lang == "en"){
//         alert(hello);
//     }
//     else if(lang == "fr"){
    
//         alert(Bojorn);
//     }
//     else if(lang == "mk"){
//         alert(Zdravo);
//     }
//     }
//      var result = helloWorld (en);
//      alert(result);

function calculateCost(bhp){
    if (bhp <= 85) {
        alert("3000 denars");
    }
    else if( bhp > 85 && bhp <= 150){
        alert("5000 denars");
    }
    else if(bhp > 150){
        alert("15000");
    }
}

var result = calculateCost(50);





    


     







