var array=[5,4,8,7];
var max=array[0];
for(var i=0;i<array.length;i++){
    if (array[i]>max){
        max=array[i];
    }
}
console.log(max);