import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower : string = "russell";
  nombreUpper: string = "russell";
  nombreCompleto : string = "russell jhoel delgado muñoz";

  fecha : Date = new Date();

}
