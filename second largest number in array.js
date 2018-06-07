var myArray=[5,1,2,3,4,];
var biggest = myArray[0];
var nextbiggest = myArray[0];
var third=myArray[0];
for(var i=0;i<myArray.length;i++){
    if(myArray[i]>biggest){
        third=nextbiggest;
        nextbiggest = biggest;
        biggest = myArray[i];
    }
    else if(myArray[i]>nextbiggest && myArray[i]!=biggest){
        third=nextbiggest;
        nextbiggest = myArray[i];
    }
        else if(myArray[i]>third && myArray[i]!=nextbiggest && myArray[i]!=biggest){
             third=myArray[i];
    }
    }

console.log(third);