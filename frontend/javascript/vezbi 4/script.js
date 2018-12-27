// 1
// for (var i = 0; i <= 15; i++){

// if(i % 2 === 0){
//  alert(i + " is even");
    
// }else {
//     alert (i + " is odd");
// }

// }

// for (var i = 0; i <=100; i++){
//       if (i % 3 === 0 && i % 5 === 0 ){
//         console.log (i + "FizzBuzz");
//     }
//      else if(i % 3 === 0 ){
//         console.log(i + "Fizz");
//     }
//     else if(i % 5 ===0){
//         console.log (i + "Buzz");
//     }

// }

// 2.

// function amstrongNum (number) {
// 	var result = 0;
// 	while(number > 0){
// 		var digit = number % 10;
// 		result += Math.pow(digit,3);
// 		number = Math.floor (number/10);
// 	}

//    return result;
// }
//  for (var i = 100; i <= 999; i++){
//     var result = amstrongNum(i);
//     if(result === i ){
//         console.log ( i + " is amstrong number");
//     }

//  }


// 3.

//  var sum = 0;
//  for (var i = 0; i < 1000; i++){
// 	 if(i % 3 === 0 || i % 5 === 0){
// 	  sum += i;
	  
// 	 }
//  }
//  alert (sum);


// 4.

//  function integersInRange (x,y){
// 	 var result = 0;
// for(var i = x; i <= y; i++ ) {
//  result += i;
// }
// console.log (result.toString());
//  }
//  integersInRange (10, 15);


function iterateRangeOfNum (x,y){
	var result = 0;
	for(var i = x; i <= y; i++ ) {
		
		if(!isPrime(i)){
			result += i;
		}
		
	   }
	   console.log (result.toString());
		}

iterateRangeOfNum (10,25 );

function isPrime(num) {
	for(var i = 2; i < num; i++)
	  if(num % i === 0) return false;
	return num !== 1 && num !== 0;
  }



  function feedCats (cat){
   for (var i = 0; i < 7; i++){
	   if (cat === "Toby"){
		   console.log (cat + " started eating fish");
	   }else if (cat === "Lizzie"){
		   console.log (cat + " started eating chicken");
	   }else if (cat === "Mary"){
		console.log (cat + " started eating whatever");

   }
}  
   }

  feedCats ("Toby");
