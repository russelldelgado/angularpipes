import { Pipe, PipeTransform } from '@angular/core';
import { Color, Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  //si colocamos ...args indicamos que queremos todos los argumentos que nos manden ... si le quitamos los puntitmos solo queremos un argumento

  transform(heroes: Heroe[], ordenarPor : string = "sin valor"):Heroe []{

    switch( ordenarPor){
      case 'nombre':
        return heroes.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1 );
      case 'vuela':
        return heroes.sort((a,b) => (a.vuela > b.vuela) ? -1 : 1 );

      case 'color':
        return heroes.sort((a,b) => (a.color > b.color) ? 1 : -1 );

      default : 
      return heroes;
    }


    // console.log('Pipe  : ' , ordenarPor);

    // if(ordenarPor === 'sin valor'){
    //   return heroes;
    // }

    // console.log(heroes);
    // //con esto le digo que me lo ordene por nombre si es uno que me lo ponga antes si no no .
    // heroes = heroes.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1 );

    // return heroes;
  }

}
