$(function () {
    var HandleDOM = function HandleDOM (target, event, action, params) {
        this.target = target;
        this.event = event;
        this.action = action;
        this.params = params;

        function addShortList () {
            target.on(event, function () {
                params.forEach(function (param) {
                    target.append(
                        '<li class="list--short">' + param + '</li>'
                    );
                });
            });
        }
    }

    var myContents = document.getElementById('my-contents');
    var alex = new HandleDOM(myContents, 'click', addShortList, ['one', 'two', 'three']);

    console.log(alex.event);
});
