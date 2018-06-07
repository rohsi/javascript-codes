function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true


}


var array = [13, 23, 55, 34, 5];
// var sum=0;
// for (var i=0;i<array.length;i++){
//     if(isPrime(array[i])){
//         sum=sum+array[i];
//     }
// }
// console.log(sum);

function sum(a, b) {
    return a + b;
}

var number = array
    .filter(isPrime)
    .map(function (value) {
        return value * value;
    })
    .reduce(sum);

console.log(number)

