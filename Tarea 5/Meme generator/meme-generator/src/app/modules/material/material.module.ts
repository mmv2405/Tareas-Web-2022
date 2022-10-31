import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports:[
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
