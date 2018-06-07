function evenNo(num) {
    if(num%2==0){
        return true
    }else {
        return false
    }

}
var array=[14,3,5,6,8];
var new_array=[];
for (var i=0;i<array.length;i++){
    var even = evenNo(array[i]);
    if (even){
        new_array.push(array[i]);
    }
}
console.log(new_array);