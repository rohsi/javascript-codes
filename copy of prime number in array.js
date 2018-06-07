var array=[100,41,5,28,14];
var new_array=[];
function isPrime(number) {
    for(var i=2;i<number;i++){
        if(number%i==0){
            return false
        }
    }return true

}

for(var i=0;i<array.length;i++){
    var prime = isPrime(array[i]);
    console.log(" number  "+ array[i] + " is "+ prime)
    if (prime){
      new_array.push(array[i]);
    }
}
console.log(new_array);