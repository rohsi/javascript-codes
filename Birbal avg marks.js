var obj = [
    {
        "name": "Amar",
        "marks": [50, 60, 30]
    }
    , {
        "name": "Birbal",
        "marks": [40, 80, 65]
    },
    {
        "name": "Rohit",
        "marks": [40, 80, 65]
    }
];
for(var i=0;i<obj.length;i++){
    var o=obj[i];
    var sum=0;
    for(var j=0;j<o.marks.length;j++){
        sum=o.marks[j] + sum;
    }
    o.totalmarks=sum;
    o.average=(sum/o.marks.length).toFixed(2);
    console.log(o);
}