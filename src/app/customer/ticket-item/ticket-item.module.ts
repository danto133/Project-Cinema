import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketItemComponent } from './ticket-item.component';

@NgModule({
  declarations: [TicketItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TicketItemComponent
  ]
})
export class TicketItemModule { }
