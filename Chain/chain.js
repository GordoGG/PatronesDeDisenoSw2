var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmpleadoTienda = /** @class */ (function () {
    function EmpleadoTienda() {
    }
    EmpleadoTienda.prototype.agregarSucesor = function (empleado) {
        this.sucesor = empleado;
    };
    return EmpleadoTienda;
}());
var Vendedor = /** @class */ (function (_super) {
    __extends(Vendedor, _super);
    function Vendedor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vendedor.prototype.resolverReclamo = function (reclamo) {
        if (reclamo.monto < 300) {
            console.log("El vendedor relolvio el reclamo");
        }
        else {
            this.sucesor.resolverReclamo(reclamo);
        }
    };
    return Vendedor;
}(EmpleadoTienda));
var Supervisor = /** @class */ (function (_super) {
    __extends(Supervisor, _super);
    function Supervisor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Supervisor.prototype.resolverReclamo = function (reclamo) {
        if (reclamo.monto < 500) {
            console.log("El supervisor relolvio el reclamo");
        }
        else {
            this.sucesor.resolverReclamo(reclamo);
        }
    };
    return Supervisor;
}(EmpleadoTienda));
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.resolverReclamo = function (reclamo) {
        console.log("El gerente relolvio el reclamo");
    };
    return Gerente;
}(EmpleadoTienda));
var chain = function () {
    var vendedor = new Vendedor();
    var supervisor = new Supervisor();
    var gerente = new Gerente();
    vendedor.agregarSucesor(supervisor);
    supervisor.agregarSucesor(gerente);
    var reclamo = {
        producto: "Zapatilla",
        monto: 300
    };
    vendedor.resolverReclamo(reclamo);
};
chain();
