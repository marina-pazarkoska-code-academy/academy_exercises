function concatenateStrings(str1, str2, reverse){
    if(reverse === true){
        var res = str1. concat(str2);
        alert(res);
    }
    else if(reverse === false){
        var resu = str2. concat(str1);
        alert(resu);
    }
}

var result = concatenateStrings ("Hello ", "World!", true);
var result = concatenateStrings ("Hello!", "World ", false);


function calculateTax(salery, profession ){
    if (salery <= 1000 && profession === "everything"){
    var tax1 = salery * 0.11;
    alert("Your tax is " + tax1);
    }
    else if (salery > 1000 && profession === "everything"){
    var rest = salery - 1000;
    var tax2 = (1000 * 0.11) + (rest * 0.18);
    alert("Your tax is " + tax2);
    }
    else if (salery <= 1000 && profession === "craftsman"){
        var craf = salery * 0.05;
        alert ("The salery of craftsman is " + craf);
    }
    else if (salery > 1000 && profession === "craftsman"){
        var craf = salery - 1000;
        var tax2 = (1000 * 0.05) + (craf * 0.1);
        alert ("The salery of craftsman is " + craf);
    }

    
}

var res = calculateTax(1000, "everything");
var res = calculateTax(1200, "everything");
var res = calculateTax(950, "craftsman");
var res = calculateTax(1200, "craftsman");



// function calculateTax(salery,type){
//     var tax = 0;
//     var overtax = 0;
//     if(type === "craftsman"){
//         tax = 0.05;
//         overtax = 0.1;
//     } 
//     else {
//         tax = 0.11;
//         overtax = 0.18;
//     }

//     var net = 0;
//     if(salery<= 1000){
//         net = 1000 * tax;
//     }
//  else {
//     var ostatok = net - 1000;
//     net = ostatok * overtax + 1000 * tax;
// }
// return net;
// }
// var result = calculateTax(1450, "Craftsman");

    