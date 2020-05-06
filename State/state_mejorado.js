var EstadoSoltero = /** @class */ (function () {
    function EstadoSoltero(persona) {
        this.persona = persona;
    }
    EstadoSoltero.prototype.casar = function () {
        this.persona.estadoCivil = new EstadoCasado(this.persona);
    };
    EstadoSoltero.prototype.divorciar = function () { };
    EstadoSoltero.prototype.morir = function () {
        this.persona.estadoCivil = new EstadoDifunto(this.persona);
    };
    EstadoSoltero.prototype.enviudar = function () { };
    EstadoSoltero.prototype.toString = function () {
        return "soltero";
    };
    return EstadoSoltero;
}());
var EstadoCasado = /** @class */ (function () {
    function EstadoCasado(persona) {
        this.persona = persona;
    }
    EstadoCasado.prototype.casar = function () {
    };
    EstadoCasado.prototype.divorciar = function () {
        this.persona.estadoCivil = new EstadoDivorciado(this.persona);
    };
    EstadoCasado.prototype.morir = function () {
        this.persona.estadoCivil = new EstadoDifunto(this.persona);
    };
    EstadoCasado.prototype.enviudar = function () {
        this.persona.estadoCivil = new EstadoViudo(this.persona);
    };
    EstadoCasado.prototype.toString = function () {
        return "casado";
    };
    return EstadoCasado;
}());
var EstadoDivorciado = /** @class */ (function () {
    function EstadoDivorciado(persona) {
        this.persona = persona;
    }
    EstadoDivorciado.prototype.casar = function () {
        this.persona.estadoCivil = new EstadoCasado(this.persona);
    };
    EstadoDivorciado.prototype.divorciar = function () { };
    EstadoDivorciado.prototype.morir = function () {
        this.persona.estadoCivil = new EstadoDifunto(this.persona);
    };
    EstadoDivorciado.prototype.enviudar = function () { };
    EstadoDivorciado.prototype.toString = function () {
        return "divorciado";
    };
    return EstadoDivorciado;
}());
var EstadoViudo = /** @class */ (function () {
    function EstadoViudo(persona) {
        this.persona = persona;
    }
    EstadoViudo.prototype.casar = function () {
        this.persona.estadoCivil = new EstadoCasado(this.persona);
    };
    EstadoViudo.prototype.divorciar = function () { };
    EstadoViudo.prototype.morir = function () {
        this.persona.estadoCivil = new EstadoDifunto(this.persona);
    };
    EstadoViudo.prototype.enviudar = function () { };
    EstadoViudo.prototype.toString = function () {
        return "viudo";
    };
    return EstadoViudo;
}());
var EstadoDifunto = /** @class */ (function () {
    function EstadoDifunto(persona) {
        this.persona = persona;
    }
    EstadoDifunto.prototype.casar = function () { };
    EstadoDifunto.prototype.divorciar = function () { };
    EstadoDifunto.prototype.morir = function () { };
    EstadoDifunto.prototype.enviudar = function () { };
    EstadoDifunto.prototype.toString = function () {
        return "muerto";
    };
    return EstadoDifunto;
}());
var Persona = /** @class */ (function () {
    function Persona() {
        this.estadoCivil = new EstadoSoltero(this);
    }
    Persona.prototype.casar = function () {
        this.estadoCivil.casar();
    };
    Persona.prototype.divorciar = function () {
        this.estadoCivil.divorciar();
    };
    Persona.prototype.morir = function () {
        this.estadoCivil.morir();
    };
    Persona.prototype.enviudar = function () {
        this.estadoCivil.enviudar();
    };
    Persona.prototype.toString = function () { };
    return Persona;
}());
var state = function () {
    var billy = new Persona();
    billy.casar();
    console.log("El estado de Billy es: " + billy.estadoCivil.toString());
    billy.divorciar();
    console.log("El estado de Billy es: " + billy.estadoCivil.toString());
};
state();
