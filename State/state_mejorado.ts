interface EstadoCivil {
    persona: Persona
    casar()
    divorciar()
    morir()
    enviudar()
    toString()
}

class EstadoSoltero implements EstadoCivil{
    persona: Persona;    
    constructor(persona: Persona){
        this.persona = persona
    }
    casar() {
        this.persona.estadoCivil = new EstadoCasado(this.persona)
    }
    divorciar() {}
    morir() {
        this.persona.estadoCivil = new EstadoDifunto(this.persona)
    }
    enviudar() {}
    toString() {
        return "soltero"
    }

}
class EstadoCasado implements EstadoCivil{
    persona: Persona;    
    constructor(persona: Persona){
        this.persona = persona
    }
    casar() {
        
    }
    divorciar() {
        this.persona.estadoCivil = new EstadoDivorciado(this.persona)
    }
    morir() {
        this.persona.estadoCivil = new EstadoDifunto(this.persona)
    }
    enviudar() {
        this.persona.estadoCivil = new EstadoViudo(this.persona)
    }

    toString() {
        return "casado"
    }
}
class EstadoDivorciado implements EstadoCivil{
    persona: Persona;        
    constructor(persona: Persona){
        this.persona = persona
    }
    casar() {
        this.persona.estadoCivil = new EstadoCasado(this.persona)
    }
    divorciar() {}
    morir() {
        this.persona.estadoCivil = new EstadoDifunto(this.persona)
    }
    enviudar() {}

    toString() {
        return "divorciado"
    }
}
class EstadoViudo implements EstadoCivil{
    persona: Persona;       
    constructor(persona: Persona){
        this.persona = persona
    } 
    casar() {
        this.persona.estadoCivil = new EstadoCasado(this.persona)
    }
    divorciar() {}
    morir() {
        this.persona.estadoCivil = new EstadoDifunto(this.persona)
    }
    enviudar() {}

    toString() {
        return "viudo"
    }
}
class EstadoDifunto implements EstadoCivil{
    persona: Persona;        
    constructor(persona: Persona){
        this.persona = persona
    }
    casar() {}
    divorciar() {}
    morir() {}
    enviudar() {}
    
    toString() {
        return "muerto"
    }
}

class Persona {
    estadoCivil: EstadoCivil
    constructor(){
        this.estadoCivil = new EstadoSoltero(this)
    }
    casar() {
        this.estadoCivil.casar()
    }
    divorciar() {
        this.estadoCivil.divorciar()
    }
    morir() {
        this.estadoCivil.morir()
    }
    enviudar() {
        this.estadoCivil.enviudar()
    }
    toString(){}
    
}

let state : Function = () => {
    let billy: Persona = new Persona()
    billy.casar()
    console.log(`El estado de Billy es: ${billy.estadoCivil.toString()}`)
    billy.divorciar()
    console.log(`El estado de Billy es: ${billy.estadoCivil.toString()}`)
}

state()