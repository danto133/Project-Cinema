import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from '../../_Core/Services/data.service';
import { TicketItemComponent } from '../ticket-item/ticket-item.component';

@Component({
    selector: 'app-ticket-room',
    templateUrl: './ticket-room.component.html',
    styleUrls: ['./ticket-room.component.scss']
})
export class TicketRoomComponent implements OnInit {
    id: any;
    getListSeat: any;
    listUserPick : any[] = [];
    @ViewChildren(TicketItemComponent) tagListItemGhe: QueryList<TicketItemComponent>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.getDetailTicket();
    }

    getDetailTicket(){
        this.id = this.activatedRoute.snapshot.paramMap.get("id");
        const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.id}`;
        this.dataService.get(uri).subscribe((data: any) => {
            console.log(data);
            this.getListSeat = data;
        })
    }

    pickSeat(objSeat,index) {
        console.log(objSeat);
        
        if(objSeat._status && !objSeat._seat.DaDat) {
            this.listUserPick.push(objSeat._seat);
        }
        else {

            this.tagListItemGhe.map(item => {
                if (item.seat.STT === objSeat._seat.STT) {
                    item.status = false;
                    this.listUserPick.splice(index, 1);
                }
              })
        }
        console.log(this.listUserPick);

        
    }
    // cancelSeat(value,index) {
        
    // }

}
