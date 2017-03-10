$(function () {
    var Human = function Human (name, age, living) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.living = living;

        this.prototype.getStatus = function () {
            console.log(`name: ${name}, age: ${age}, sex: ${sex}, living: ${living}`);  
        };
    };

    var cozy = new Human('cozy powel', 35, 'male', true);
    cozy.getStatus();
    console.log(cozy.name);
});
