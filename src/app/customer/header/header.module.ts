import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { ComponentModule } from 'src/app/_Core/Modules/component/component.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    RouterModule,
    ComponentModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
