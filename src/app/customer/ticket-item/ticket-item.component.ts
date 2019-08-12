import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-ticket-item',
    templateUrl: './ticket-item.component.html',
    styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent implements OnInit {
    @Input() seat: any;
    @Output() eventClick = new EventEmitter();
    status: boolean = false;

    constructor() { }

    ngOnInit() {
    }   

    pickSeat() {
        
        this.status = !this.status;
        const objSeat = {
            _status: this.status,
            _seat: this.seat
        }
        this.eventClick.emit(objSeat)
        // console.log(objSeat);
        
    }

}
