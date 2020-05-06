var paint = function (name, lastname) {
    return "{name: '" + name + "', lastname: '" + lastname + "'}";
};
var decorativeFunction = function (f, name, lastname) {
    var alreadyDecorated = function () {
        var ans = f(name, lastname);
        return ans.toUpperCase();
    };
    return alreadyDecorated;
};
var decoratedFunction = decorativeFunction(paint, "Bruno", "Cardenas");
console.log(decoratedFunction());
