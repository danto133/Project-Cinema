import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from '../films/films.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';

@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FilmsComponent
  ]
})
export class FilmsModule { }
