import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDetailComponent } from './film-detail.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FilmDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    FilmDetailComponent
  ]
})
export class FilmDetailModule { }
