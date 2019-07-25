import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmsComponent } from './list-films.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';
import { FilmItemModule } from '../../film-item/film-item.module';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListFilmsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FilmItemModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    ListFilmsComponent,
  ]
})
export class ListFilmsModule { }
