import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSlideComponent } from './menu-slide.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuSlideComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MenuSlideComponent,
  ]
})
export class MenuSlideModule { }
