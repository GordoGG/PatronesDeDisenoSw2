var ConcreteObserver1 = /** @class */ (function () {
    function ConcreteObserver1() {
    }
    ConcreteObserver1.prototype.notifyEvent = function () {
        console.log("Take notes in notepad");
    };
    return ConcreteObserver1;
}());
var ConcreteObserver2 = /** @class */ (function () {
    function ConcreteObserver2() {
    }
    ConcreteObserver2.prototype.notifyEvent = function () {
        console.log("Take notes in notebook");
    };
    return ConcreteObserver2;
}());
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.addObserver = function (obs) {
        this.observers.push(obs);
    };
    Observable.prototype.emitEvent = function () {
        this.observers.forEach(function (element) {
            element.notifyEvent();
        });
    };
    return Observable;
}());
var observer = function () {
    var teacher = new Observable();
    var marcelo = new ConcreteObserver1;
    var aron = new ConcreteObserver2;
    teacher.addObserver(marcelo);
    teacher.addObserver(aron);
    teacher.emitEvent();
};
observer();
