import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//importo todo el paquete de fr de locales
import localES from '@angular/common/locales/es-HN';
import localFR from '@angular/common/locales/fr';

//importo una funcion que necesito para trabajar con formato de fechas
import {registerLocaleData} from '@angular/common';

//ahora tengo que mandar a llamar a esa function con el objeto que estoy importando

registerLocaleData(localES); //al hacer esto yo ya tengo registrado en mi aplicacion el frances , y ya solo tendria que mandar por los pipes el local de francia en el formato de las fechas.
//para registrar esto de forma global tengo que hacerlo dentro de los providers.
registerLocaleData(localFR); 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    PrimeNgModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    {
      provide : LOCALE_ID , 
      useValue : 'es-HN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
