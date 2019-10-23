type Dni = number;

interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    dni: Dni;
    profesion?: string;
}

const persona1: Persona = {
    nombre :"Andres",
    apellido: 'Acelas',
    edad: 22,
    dni: 78545,
    profesion: 'Frontend'
}

const persona2: Persona = {
    nombre :"Andres",
    apellido: 'Acelas',
    edad: 22,
    dni: 78545,
}