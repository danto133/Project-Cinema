import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { DataService } from "../../../Services/data.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    usernameFormControl = new FormControl('', [
        Validators.required,
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required,
    ]);
    phoneFormControl = new FormControl('', [
        Validators.required,
    ]);
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    matcher = new MyErrorStateMatcher();

    @ViewChild("registerForm", {static: false} ) registerForm: NgForm;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
    }
    register(registerForm) {
        const objUser = {
            TaiKhoan: registerForm.TaiKhoan,
            MatKhau: registerForm.MatKhau,
            Email: registerForm.Email,
            SoDT: registerForm.SoDT,
            MaNhom: 'GP10',
            MaLoaiNguoiDung: 'KhachHang'
          };

        const uri = `QuanLyNguoiDung/ThemNguoiDung`;
        this.dataService.post(uri, objUser).subscribe((data: any) => {
        if (data === 'Tài khoản đã tồn tại') {
            alert(data)
        } else {
            alert('Đăng ký thành công')
            console.log(data);
            
        }
        })
    }

}
