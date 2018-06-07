var names = ['Amar', 'Akbar', 'birbal'];
var s=names.filter(function (names) {
    return names[0]===names[0].toUpperCase();
})
console.log(s);