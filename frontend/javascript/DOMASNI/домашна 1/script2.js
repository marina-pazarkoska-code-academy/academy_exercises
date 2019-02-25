function calculatePriceOfiPhone() {
    var iPhones = 30;
    var iPhoneprice = 899.95;
    var iPhonesprice = iPhones * iPhoneprice ;
    var CustomRate = iPhonesprice * 18/100;
    var iPhonesPlusCustomRate = iPhonesprice + CustomRate;
    var TaxRate = iPhonesprice * 5/100;
    var FinallPrice = iPhonesPlusCustomRate +  TaxRate;
    alert(FinallPrice);
}

calculatePriceOfiPhone()

// function calculatePriceOfiPhone(iPhoneprice) {
//     var iPhones = 30;
//     var iPhonesprice = iPhones * iPhoneprice ;
//     var CustomRate = iPhonesprice * 18/100;
//     var iPhonesPlusCustomRate = iPhonesprice + CustomRate;
//     var TaxRate = iPhonesprice * 5/100;
//     var FinallPrice = iPhonesPlusCustomRate +  TaxRate;
//     alert(FinallPrice);
// }

// var result = calculatePriceOfiPhone(1000);
// (ako sakame da presmetame so razlicni ceni a ne samo so edna cena)










