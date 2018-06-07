var listOfPeople = [
    {
        name: "Amar",
        fixeddeposit: 50000,
        mutualfund: 150000
    },
    {
        name: "Bill",
        fixeddeposit: 25832,
        mutualfund: 1123
    },
    {
        name: "Cate",
        fixeddeposit: 50000,
        mutualfund: 0
    },
];
for(var i=0;i<listOfPeople.length;i++) {

    var sum = listOfPeople[i].fixeddeposit + listOfPeople[i].mutualfund;


    listOfPeople[i].totalinvestments = sum;



}
console.log(listOfPeople);