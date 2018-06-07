var myArray=[3,5,4,8,19];
function even(a){
    return a.filter(function(val){return val%2===0})
}
console.log(even(myArray));