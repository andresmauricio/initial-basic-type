function log(target, key) {
    console.log(key + 'se ha llamado');
}

class Persona {
    private nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }
    @log()
    sayMyName() {
        console.log(this.nombre);
    }
}

const persona: Persona = new Persona('Andres')
persona.sayMyName();