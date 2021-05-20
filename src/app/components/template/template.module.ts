import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SliderComponent
  ]
})
export class TemplateModule { }
