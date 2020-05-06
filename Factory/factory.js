var EmpleadoFactory = /** @class */ (function () {
    function EmpleadoFactory() {
    }
    EmpleadoFactory.prototype.obtenerEmpleado = function (tipo) {
        if (tipo == "cocinero") {
            return new Cocinero();
        }
        else if (tipo == "llamador") {
            return new Llamador();
        }
        else if (tipo == "mozo") {
            return new Mozo();
        }
        else {
            return null;
        }
    };
    return EmpleadoFactory;
}());
var Mozo = /** @class */ (function () {
    function Mozo() {
    }
    Mozo.prototype.recibirSueldo = function (sueldo) {
        console.log("Un mozo recibio sueldo: " + sueldo);
    };
    return Mozo;
}());
var Cocinero = /** @class */ (function () {
    function Cocinero() {
    }
    Cocinero.prototype.recibirSueldo = function (sueldo) {
        console.log("Un cocinero recibio sueldo: " + sueldo);
    };
    return Cocinero;
}());
var Llamador = /** @class */ (function () {
    function Llamador() {
    }
    Llamador.prototype.recibirSueldo = function (sueldo) {
        console.log("Un llamador recibio sueldo: " + sueldo);
    };
    return Llamador;
}());
var factory = function () {
    //let tipo : string = process.argv[2] //Obtener params de shell
    var empleadoFactory = new EmpleadoFactory();
    var empleado1 = empleadoFactory.obtenerEmpleado("cocinero");
    var empleado2 = empleadoFactory.obtenerEmpleado("mozo");
    empleado1.recibirSueldo(2000);
    empleado2.recibirSueldo(2000);
};
factory();
