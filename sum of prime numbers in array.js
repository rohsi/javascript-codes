

// This was what you had written carelessly.....
// function evenNo(num) {
//     if (num % 2 == 0) {
//         return false
//     } else {
//         return true
//     }
// }

function evenNo(num) {
    if(num%2==0){
        return true;
    }
    return false;
}

var array=[2,4,5,7,9];
var sum=0;
for(var i=0;i<array.length;i++){

    //This was what you had written carelessly.
    // if(evenNo(i)){
    if(evenNo(array[i])){
        // Even this.
        // sum =sum +evenNo(i);
        sum =sum +array[i];
    }
}
console.log(sum);