import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { IconPlayComponent } from './icon-play/icon-play.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MaterialModule } from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [ModalDialogComponent, IconPlayComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalDialogComponent,
    IconPlayComponent,
    SignInComponent,
    SignUpComponent
  ]
})
export class ComponentModule { }
