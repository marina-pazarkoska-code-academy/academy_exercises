// function convertToFahrenheit(celsius){
    
//   return celsius * 1.8 + 32;
// }

// var result = convertToFahrenheit(56);

// function convertToCelsius(fahrenheit){
    
//     return (5 / 9) * (fahrenheit -32);
//   }
  
//   var result = convertToCelsius(113);


function convert(temperature, type){
if (type === "C") {
    return celsius * 1.8 + 32;
}
 
else if (type ==="F") {
    return (5 / 9) * (fahrenheit -32);
}else{
    return 0;

}
}

var result = convert(35, "C");
alert(result);


