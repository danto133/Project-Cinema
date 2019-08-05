import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }

  private isLogin = new BehaviorSubject(false as boolean);

  shareIsLogin = this.isLogin.asObservable();

  sharingIsLongin(data: boolean){
    this.isLogin.next(data);
  }

  

}
