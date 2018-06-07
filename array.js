var john={
    name:'John',
    yearOfBirth:1990,
    job:'teacher'
};
var Person=function (name,yearOfBirth,job) {
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
};
Person.prototype.calculateAge=function () {
    console.log(2016-this.yearOfBirth)
};
Person.prototype.lastName='smith';
var john=new Person('John',1990,'teacher');

var Jane=new Person('Jane',1969,'designer');

john.calculateAge();
Jane.calculateAge();