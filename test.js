window.onload = (function () {
    function addList () {
        var parentList = document.getElementById('my-contents__list');
        var childContent = document.createElement('li');

        childContent.setAttribute('class', 'appendix');
        parentList.appendChild(childContent);
    }
    
    function removeList () {
        var parentList = document.getElementById('my-contents__list');
        var childContent = document.getElementsByClassName('appendix');

        parentList.removeChild(parentList.lastChild);
    }

    var addContents = document.getElementById('my-contents__add');
    addContents.addEventListener('click', addList, false);

    var removeContents = document.getElementById('my-contents__remove');
    removeContents.addEventListener('click', removeList, false);

    // var Human = function Human (name, age, sex, living) {
    //     this.name = name || 'John Doe';
    //     this.age = age;
    //     this.sex = sex;
    //     this.living = living || 'unknown';
    //     this.getName = function () {
    //         console.log('My name is ' + this.name + '.');
    //         return true;
    //     };
    //     this.isLiving = function () {
    //         console.log('I am ' + this.living + '.');
    //         return true;
    //     };
    // };

    // var alex = new Human('Alex Alexander', 23, 'male', 'living');
    // var another = new Human('Another Others', 25, 'female');

    // console.log(alex.age);
    // console.log(alex.getName());
    // console.log(alex.isLiving());
    // console.log(another.isLiving());
    // console.log('all things are set aside.');
});
