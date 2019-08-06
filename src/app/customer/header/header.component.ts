import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/_Core/Services/share-data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private shareData: ShareDataService
    ) {   }
    
    isLoginOb: Subscription;
    userLoginOb: Subscription;

    ngOnInit() {
        this.isLoginOb = this.shareData.shareIsLogin.subscribe(data=>this.isLogin = data);
        this.userLoginOb = this.shareData.shareUserCurrent.subscribe(data=>this.userLogin = data);
    }

    isLogin:boolean = false;
    userLogin;

    onLogOut(){     
        this.shareData.sharingIsLongin(false);
        this.shareData.sharingUserCurrent(null);
    }


    ngOnDestroy(): void {
        this.isLoginOb.unsubscribe();
        this.userLoginOb.unsubscribe();
        
    }

}
