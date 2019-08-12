import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketRoomComponent } from './ticket-room.component';
import { TicketItemModule } from '../ticket-item/ticket-item.module';

@NgModule({
  declarations: [TicketRoomComponent],
  imports: [
    CommonModule,
    TicketItemModule
  ]
})
export class TicketRoomModule { }
