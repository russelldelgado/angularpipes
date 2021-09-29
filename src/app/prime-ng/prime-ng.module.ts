import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  exports : [
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
  ]
})
export class PrimeNgModule { }
