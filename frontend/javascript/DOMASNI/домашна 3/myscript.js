

// function totallyDifferent(n, x) {
//     for (var index = n + 1; index < 500000; index++) {
//         var result = checkNumbers(index, x);
//         if (result) {
//             console.log("The numbers are totally different: ", index, x);
//             return;
//         }
//     }
// }

// function checkNumbers(number1, number2) {
//     while (number1 > 0) {
//         var num2 = number2;  
//         var result1 = number1 % 10;
//         while (num2 > 0) {
//             var result2 = num2 % 10;
//             if (result1 === result2) {
//                 console.log("numbers are the same");
//                 return false;
//             } 
//             num2 = Math.floor(num2 / 10);
//         }
//         number1 = Math.floor(number1 / 10);
//     }

//     return true;
// }

// totallyDifferent(100, 124567890);


function sumDigits (number) {
	var result = 0;
	while(number > 0){
		var digit = number % 10;
		result += digit;
		number = Math.floor (number/10);
	}

	console.log("The result is: ", result);

}
// -osnovno cepkanje na eden broj

sumDigits (34543);
