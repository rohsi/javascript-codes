var myArray=[14,8,5,6];
var biggest = -100;
var nextbiggest = -100;
for(var i=0;i<myArray.length;i++){
    if(myArray[i]>biggest){
        nextbiggest = biggest;
        biggest = myArray[i];
    }
    else if(myArray[i]>nextbiggest && myArray[i]!=biggest)
        nextbiggest = myArray[i];

    console.log("Biggest is "+ biggest + " Next is "+ nextbiggest)
}

console.log(nextbiggest);