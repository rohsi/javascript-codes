function interviewQuestion(job) {
    if (job=='designer'){
        return function (name) {
            console.log(name + ', can u explain what UX design is?');
        }
    }else if (job=='teacher'){
        return function (name) {
            console.log('What subject do u teach,' + name + '?');
        }
    }else {
        return function (name) {
            console.log('Hello' + name + ',what do u do?');

        }
    }
}
var teacherQuestion=
    interviewQuestion('teacher');
var designerQuestion=
    interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John')