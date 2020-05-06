var ShowStudents = /** @class */ (function () {
    function ShowStudents() {
    }
    ShowStudents.prototype.onGottenStudentList = function (students) {
        students.forEach(function (element) {
            console.log("{id: " + element.id + ", name: " + element.name + "}");
        });
    };
    return ShowStudents;
}());
var StudentsManager = /** @class */ (function () {
    function StudentsManager() {
    }
    StudentsManager.prototype.setObserver = function (observer) {
        this.observer = observer;
    };
    StudentsManager.prototype.getStudentList = function () {
        var _this = this;
        var students = [];
        setTimeout(function () {
            students = [
                { id: "20161885", name: "Bruno" },
                { id: "20160400", name: "Mauge" }
            ];
            _this.observer.onGottenStudentList(students);
        }, 3000);
    };
    return StudentsManager;
}());
var observer2 = function () {
    var manager = new StudentsManager();
    manager.setObserver(new ShowStudents());
    manager.getStudentList();
};
observer2();
