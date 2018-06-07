var arr=[1,2,5,6,8];
a.reduce(function(arr, num) {
    if (num % 2 == 0) arr.push(num);
    return arr;
}, []);
console.log(arr);