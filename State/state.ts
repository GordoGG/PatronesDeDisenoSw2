enum EstadoCivil{
    Soltero, Casado, Viudo, Divorciado, Difunto
}

class Persona{
    estadoCivil: EstadoCivil
    constructor(){
        this.estadoCivil = EstadoCivil.Soltero
    }
    casar(){
        if(this.estadoCivil != EstadoCivil.Difunto && this.estadoCivil != EstadoCivil.Casado){
            this.estadoCivil = EstadoCivil.Casado
        }
    }
    enviudar(){
        if(this.estadoCivil == EstadoCivil.Casado){
            this.estadoCivil = EstadoCivil.Viudo
        }
    }
    divorciar(){
        if(this.estadoCivil == EstadoCivil.Casado){
            this.estadoCivil = EstadoCivil.Divorciado
        }
    }
    morir(){
        this.estadoCivil = EstadoCivil.Difunto
    }
}

