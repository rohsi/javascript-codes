var myArray=[1,2,3,4,5];
var biggest = myArray[0];
var nextbiggest = myArray[0];
for(var i=0;i<myArray.length;i++){
    if(myArray[i]>biggest){
        nextbiggest = biggest;
        biggest = myArray[i];
    }
    else if(myArray[i]>nextbiggest && myArray[i]!=biggest){
        third=nextbiggest;
        nextbiggest = myArray[i];
    }

}
console.log(nextbiggest);