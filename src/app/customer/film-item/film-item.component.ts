import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-film-item',
    templateUrl: './film-item.component.html',
    styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) { }

    @Input() Film;

    ngOnInit() {
    }
    goToDetail() {
    this.router.navigate(['detail',this.Film.MaPhim],{queryParams: {tenPhim: this.Film.TenPhim}});
    }

}
