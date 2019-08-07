import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuFixComponent } from './menu-fix.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuFixComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MenuFixComponent
  ]
})
export class MenuFixModule { }
