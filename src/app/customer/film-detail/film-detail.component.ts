import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from '../../_Core/Services/data.service';

@Component({
    selector: 'app-film-detail',
    templateUrl: './film-detail.component.html',
    styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

    id: any;
    film: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.getDetail();
    }

    getDetail(){
        this.id = this.activatedRoute.snapshot.paramMap.get("id");
        const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.id}`;
        this.dataService.get(uri).subscribe((data: any) => {
            console.log(data);
            this.film = data
        })
    }


}
