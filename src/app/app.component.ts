import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'russell jhoel delgado muñoz';


  cambiarNombre(){
    this.title = 'No te puedes cambiar de nombre tan facilmente pelotudo';
  }

}
