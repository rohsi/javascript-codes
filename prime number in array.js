var arr=[100,41,3,56];
function isPrime(number) {
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true

}
    var prime_nos = arr.filter(function(a){
    return isPrime(a);

});
console.log(prime_nos);
