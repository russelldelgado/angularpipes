import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {


  mayuscula : boolean = true;
  ordenarPor : string = '';


  heroes : Heroe[]= [
    {
      nombre : "superman",
      vuela : true ,
      color : Color.rojo
    },
    {
      nombre : "batman",
      vuela : false ,
      color : Color.negro
    },
    {
      nombre : "robin",
      vuela : false ,
      color : Color.verde
    },
    {
      nombre : "daredevil",
      vuela : false ,
      color : Color.azul
    },
    {
      nombre : "linterna verde",
      vuela : true ,
      color : Color.verde
    },
  ];

  constructor() { }


  cambiarInformacion(){
    this.mayuscula = !this.mayuscula;
  }


  cambiarOrden(valor : string){
    this.ordenarPor = valor;
    console.log(this.ordenarPor);
  }

}
