import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18n select

  nombre : string  = "russell";
  genero : string = "masculino";
  rellenar : number = 0;
  rellenarLista : boolean = false;

  //nuestro i18n select necesita un mapa con los argumentos que le voy a pasar
  // no es obligatorio que el valor sea string , puede ser booleano o lo que nosotros necesitemos.

  invitacionMapa ={
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla',
  }


  //i18n plural

  clientes : string[] = ['maria' , 'pedro' , 'juan' , 'nuria'];
  //Mapa de posibles valores de i 18n plural

  clientesMapa ={
    "=0" : 'no tenemos ningun cliente esperando',
    "=1" : `tenemos # cliente esperando`,
    "other": `tenemos # clientes esperando`
  }



  cambiarCLiente(){

    if(this.genero === 'masculino'){
      this.nombre = "susana";
      this.genero = "femenino";  
    }else{
      this.nombre = "russell";
      this.genero  = "masculino";
    }
  }


  borrarCliente(){
    this.clientes.shift();
    this.comprobarNumeroDeClientes();
  }

  comprobarNumeroDeClientes(){
    if(this.rellenar ==1 && this.clientes.length == 0 ){
      
      this.rellenar++;
    }

    if(this.rellenar ==0 && this.clientes.length == 0 ){
      this.rellenarLista = true;
      this.rellenar++;
      console.log(this.rellenar);
    }
    


    if(this.clientes.length == 0 && this.rellenar ==2){
      this.rellenarLista = false;
      this.rellenar = 0;
      this.clientes = ['maria' , 'pedro' , 'juan' , 'nuria'];
    }
  }



  //key value pipe

  persona = {
    nombre  : "russell",
    edad : 33,
    direccion : "manabi ecuador"
  }


  //json pipe
  //el problema que tenemos con esto es que si mandamos una funcion o algo parecido no lo interpreta

  heroes = [
    {
      nombre : "superman",
      vuela : true
    },
    {
      nombre : "batman",
      vuela : false
    },
    {
      nombre : "ironman",
      vuela : false
    },
    {
      nombre : "kind kardasham",
      vuela : true
    },
  ];
 
  
  //pipe async

  //importamos de rxjs  el intervalo

  miObservable  = interval(1000);

  //creamos una promesa , no hace falta importar nada ya que va implicita en el código.

  valorPromesa = new Promise((resolve , reject) =>{

    setTimeout(() =>{
      resolve('Se ha resulto el problema despues de unos segundos');
    }, 4000);

  })


}
