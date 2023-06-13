/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento

      // Tu código aca:

      this.nombre = nombre;
      this.edad = edad;
      this.hobbies = hobbies;
      this.amigos = amigos;

      //Nota: Inicializar las propiedades hace referencia a nombrar con this 
      // los valores que se ingresan como parámetro en el constructor.

    }

    addFriend(nombre, edad) {
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.

      // Tu código aca:

      var amigo = {nombre: nombre, edad: edad}; // Nota: se crea el arreglo
      this.amigos.push(amigo);                  // se utilizar push para agregar el nuevo amigo que se creo al array ya existente

    }

    addHobby(hobby) {
      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.

      // Tu código aca:

      this.hobbies.push(hobby); // se utilizar push para agregar el nuevo hobbie que se creo al array ya existente


    }
    getFriends() {
      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
      // persona.getFriends() debería devolver ['martin', 'toni']

      // Tu código aca:

      var nombreAmigos = [];

      for(var i = 0; i < this.amigos.length; i++){
        nombreAmigos.push(this.amigos[i].nombre)
      }
       return nombreAmigos;
    }

    getHobbies() {
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']

      // Tu código aca:

      return this.hobbies;

    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
      // Ej:
      // Si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29

      // Tu código aca:

      var totalEdades = 0;

      for(var i = 0; i < this.amigos.length; i++){
        totalEdades = totalEdades + this.amigos[i].edad;
      }
       return totalEdades / this.amigos.length;
    }
  };
  return Persona;
}

// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona