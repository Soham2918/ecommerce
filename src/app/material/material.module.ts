import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

const matmod=[
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    matmod,
    ],
  exports:[
    matmod,
  ]
})
export class MaterialModule { }
