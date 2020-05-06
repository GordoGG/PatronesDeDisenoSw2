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
var ComponentePC = /** @class */ (function () {
    function ComponentePC() {
        this.hijos = [];
    }
    ComponentePC.prototype.agregarHijo = function (componente) {
        this.hijos.push(componente);
    };
    return ComponentePC;
}());
var Computadora = /** @class */ (function (_super) {
    __extends(Computadora, _super);
    function Computadora() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Computadora.prototype.calcularPrecio = function () {
        var total = 0;
        for (var i = 0; i < this.hijos.length; i++) {
            total += this.hijos[i].calcularPrecio();
        }
        return total;
    };
    return Computadora;
}(ComponentePC));
var Monitor = /** @class */ (function (_super) {
    __extends(Monitor, _super);
    function Monitor(precio) {
        var _this = _super.call(this) || this;
        _this.precio = precio;
        return _this;
    }
    Monitor.prototype.calcularPrecio = function () {
        return this.precio;
    };
    return Monitor;
}(ComponentePC));
var Teclado = /** @class */ (function (_super) {
    __extends(Teclado, _super);
    function Teclado(precio) {
        var _this = _super.call(this) || this;
        _this.precio = precio;
        return _this;
    }
    Teclado.prototype.calcularPrecio = function () {
        return this.precio;
    };
    return Teclado;
}(ComponentePC));
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse(precio) {
        var _this = _super.call(this) || this;
        _this.precio = precio;
        return _this;
    }
    Mouse.prototype.calcularPrecio = function () {
        return this.precio;
    };
    return Mouse;
}(ComponentePC));
var CPU = /** @class */ (function (_super) {
    __extends(CPU, _super);
    function CPU() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CPU.prototype.calcularPrecio = function () {
        var total = 0;
        for (var i = 0; i < this.hijos.length; i++) {
            total += this.hijos[i].calcularPrecio();
        }
        return total;
    };
    return CPU;
}(ComponentePC));
var Memoria = /** @class */ (function (_super) {
    __extends(Memoria, _super);
    function Memoria(precio) {
        var _this = _super.call(this) || this;
        _this.precio = precio;
        return _this;
    }
    Memoria.prototype.calcularPrecio = function () {
        return this.precio;
    };
    return Memoria;
}(ComponentePC));
var Placa = /** @class */ (function (_super) {
    __extends(Placa, _super);
    function Placa(precio) {
        var _this = _super.call(this) || this;
        _this.precio = precio;
        return _this;
    }
    Placa.prototype.calcularPrecio = function () {
        return this.precio;
    };
    return Placa;
}(ComponentePC));
var GPU = /** @class */ (function (_super) {
    __extends(GPU, _super);
    function GPU(precio) {
        var _this = _super.call(this) || this;
        _this.precio = precio;
        return _this;
    }
    GPU.prototype.calcularPrecio = function () {
        return this.precio;
    };
    return GPU;
}(ComponentePC));
var Procesador = /** @class */ (function (_super) {
    __extends(Procesador, _super);
    function Procesador(precio) {
        var _this = _super.call(this) || this;
        _this.precio = precio;
        return _this;
    }
    Procesador.prototype.calcularPrecio = function () {
        return this.precio;
    };
    return Procesador;
}(ComponentePC));
var Disco = /** @class */ (function (_super) {
    __extends(Disco, _super);
    function Disco(precio) {
        var _this = _super.call(this) || this;
        _this.precio = precio;
        return _this;
    }
    Disco.prototype.calcularPrecio = function () {
        return this.precio;
    };
    return Disco;
}(ComponentePC));
var composite = function () {
    //1. Definir la estructura
    var comp = new Computadora();
    var monitor = new Monitor(200);
    var teclado = new Teclado(100);
    var mouse = new Mouse(10);
    var cpu = new CPU();
    var procesador = new Procesador(300);
    var memoria1 = new Memoria(150);
    var memoria2 = new Memoria(150);
    var tg = new GPU(300);
    var disco = new Disco(200);
    var placa = new Placa(100);
    cpu.agregarHijo(procesador);
    cpu.agregarHijo(memoria1);
    cpu.agregarHijo(memoria2);
    cpu.agregarHijo(tg);
    cpu.agregarHijo(disco);
    cpu.agregarHijo(placa);
    comp.agregarHijo(monitor);
    comp.agregarHijo(teclado);
    comp.agregarHijo(mouse);
    comp.agregarHijo(cpu);
    //2. Llamamos a la funcion que se va a ejecutar sobre la estructura
    var precio = comp.calcularPrecio();
    console.log("El precio de la pc es: " + precio);
};
composite();
