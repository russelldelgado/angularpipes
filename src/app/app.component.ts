import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'russell jhoel delgado muñoz';

  constructor(private primengConfig: PrimeNGConfig) {}
  
  ngOnInit() {
    this.primengConfig.ripple = true;
  }



  cambiarNombre(){
    this.title = 'No te puedes cambiar de nombre tan facilmente pelotudo';
  }

}
