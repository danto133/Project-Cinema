import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from '../customer/customer.component';
import { IndexModule } from './index/index.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MaterialModule } from '../_Core/Modules/material/material.module';
import { ComponentModule } from '../_Core/Modules/component/component.module';
import { FilmDetailModule } from './film-detail/film-detail.module';
import { TicketRoomModule } from './ticket-room/ticket-room.module';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HeaderModule,
    FooterModule,
    IndexModule,
    MaterialModule,
    ComponentModule,
    FilmDetailModule,
    TicketRoomModule
  ]
})
export class CustomerModule { }
