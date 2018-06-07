var array=[12,6,2,10,24,5,36];
var max=array.reduce(function (a,b) {
    console.log(a);
    console.log(b);
    if(a>b){
        return a
    }return b

});
console.log(max);
