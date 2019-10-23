class Persona { 
    private nombres: string
    private apellidos: string;
    private age: number;

    constructor(nombre: string, apellido: string, age: number){
        this.nombres = nombre;
        this.apellidos = apellido;
        this.age = age;
    }
}

class Alumno extends Persona { 
    private matricula: string;

    constructor(nombre: string, apellido: string, age: number, maticula: string){
        super(nombre, apellido, age)
        this.matricula = maticula;
    }
}

let persona = new Persona('Andres', 'Acelas', 21);
let alumno = new Alumno('Mauricio', 'Arevalo', 21, 'ADS515A');

persona = alumno;

// shape un alumno tiene propiedades que una persona no tiene
// alumno = persona;