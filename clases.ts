class Trasnporte {
  //Decalrar propiedades de una clase.
  private velocidad: number;
  private formaDeMovilidad: string;

  // constructor de una clase para inicializar valores
  constructor(velocidad: number, formaDeMovilidad: string) {
    this.velocidad = velocidad;
    this.formaDeMovilidad = formaDeMovilidad;
  }

  public getVelocidad() {
    return this.velocidad;
  }

  public setVelocidad(velocidad: number) {
    this.velocidad = velocidad;
  }

  public getFormaDeMovilidad() {
    return this.formaDeMovilidad;
  }

  public setFormaDeMovilidad(formaDeMovilidad: string) {
    this.formaDeMovilidad = formaDeMovilidad;
  }

}
// Instanciar una clase y tiparla 
const tranporte: Trasnporte = new Trasnporte(20, 'Suelo');

class Auto extends Trasnporte {
  private cantidadDePuertas: number;

  constructor(velociada: number, formaDeMovilidad: string, cantidadPuertas: number) {
    super(velociada, formaDeMovilidad);
    this.cantidadDePuertas = cantidadPuertas;
  }

  // Si se desea cambiar una metodo de una clase.
  getVelocidadNew() {
    return super.getVelocidad() + 10;
  }

  getCantidadPuertas() {
    return this.cantidadDePuertas;
  }
}

const auto: Auto = new Auto(45, 'suelo', 4);