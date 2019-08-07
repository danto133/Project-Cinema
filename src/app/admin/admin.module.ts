import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../_Core/Modules/material/material.module';
import { MenuFixModule } from './menu-fix/menu-fix.module';
import { MenuSlideModule } from './menu-slide/menu-slide.module';
import { FilmsModule } from './films/films.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MenuFixModule,
    MenuSlideModule,
    FilmsModule,
    UserModule
  ]
})
export class AdminModule { }
