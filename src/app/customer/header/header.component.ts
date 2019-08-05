import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/_Core/Services/share-data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private shareData: ShareDataService
    ) {   }
    
    ngOnInit() {
        this.shareData.shareIsLogin.subscribe(data=>this.isLogin = data);
        this.shareData.shareUserCurrent.subscribe(data=>this.userLogin = data);
    }

    isLogin:boolean = false;
    userLogin;

}
