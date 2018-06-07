var students = [
    {
        "name": "Amar",
        "marks": [50, 60, 30],
        "address": {
            "flat": "A101",
            "building": "Blue"
        }
    },
    {
        "name": "Birbal",
        "marks": [40, 80, 65]
        , "address": {
            "flat": "A190",
            "building": "Green"
        }

    },
    {
        "name": "Rohit",
        "marks": [40, 80, 65],
        "address": {
            "flat": "C120",
            "building": "Grey"
        }

    }
];

for (var i = 0; i < students.length; i++) {
    var stude = students[i];
    var sum = 0;
    for (var j = 0; j < stude.marks.length; j++) {
        sum = sum + stude.marks[j];

    }
    stude.totalmarks = sum;
    stude.average = (sum / stude.marks.length).toFixed(2);
    stude.address.pincode = "400076";

}

console.log(students[1].address.building)

var obj = {
    name: "Mohit"
}