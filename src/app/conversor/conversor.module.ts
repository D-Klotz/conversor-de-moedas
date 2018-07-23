import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ConversorService, MoedaService } from './services';
import { ConversorComponent } from './component';
import { NumeroDirective } from './directives';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    ConversorComponent,
    NumeroDirective
  ],
  providers: [
    MoedaService,
    ConversorService
  ],
  exports: [
    ConversorComponent
  ]
})
export class ConversorModule { }
