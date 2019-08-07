import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class UserModule { }
