import { Component, OnInit } from '@angular/core'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { DataService } from "../../../Services/data.service";
import { ShareDataService } from 'src/app/_Core/Services/share-data.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    usernameFormControl = new FormControl('', [
        Validators.required,
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required,
    ]);
    matcher = new MyErrorStateMatcher();
    constructor(
        private dataService: DataService,
        private shareData: ShareDataService
    ) { }

    ngOnInit() {
    }
    
    logIn(LoginForm) {
        const uri = `QuanLyNguoiDung/DangNhap?TaiKhoan=${LoginForm.Username}&MatKhau=${LoginForm.Password}`
        this.dataService.post(uri).subscribe((data: any) => {
            if (data === 'Tài khoản hoặc mật khẩu không đúng !') {
                alert(data);
            } else {
                this.shareData.sharingIsLongin(true);
                this.shareData.sharingUserCurrent(data);
                localStorage.setItem("userLogin",JSON.stringify(data));
            }
        })
    }

}
