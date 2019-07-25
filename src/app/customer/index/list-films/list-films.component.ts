import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { DataService } from "../../../_Core/Services/data.service";

export interface ExampleTab {
    label: string;
    content: string;
}

@Component({
    selector: 'app-list-films',
    templateUrl: './list-films.component.html',
    styleUrls: ['./list-films.component.scss']
})
export class ListFilmsComponent implements OnInit {

    asyncTabs: Observable<ExampleTab[]>;
    listFilm: any;
    p: number = 1;

    constructor(
        private dataService: DataService,
    ) {
    }

    ngOnInit() {
        this.getListMovie();
    }
    pageChange(event) {
        this.p = event;
    }

    getListMovie() {
        const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP10";
        this.dataService.get(uri).subscribe((data: any) => {
            console.log(data);
            this.listFilm = data; 
        })
    }


}
