import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'

//* -----------------------
//* LIBRARIES
//* -----------------------
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { DemoMaterialModule } from './modules/material.module';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from './components/modal/login/login.component';
import { ToastComponent } from './components/toast/toast.component';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './components/modal/confirm/confirm.component';

@NgModule({
    declarations: [
        NavbarComponent,
        ModalComponent,
        LoginComponent,
        ToastComponent,
        ConfirmComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DemoMaterialModule,
        RouterModule
    ],
    exports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DemoMaterialModule,
        ModalComponent,
        NavbarComponent,
        ModalComponent,
        LoginComponent,
        RouterModule,
        ConfirmComponent
    ],
     providers: [
         { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
         { provide: MatDialogRef, useValue: {} },
         { provide: MAT_DIALOG_DATA, useValue: [] },
    ],
    entryComponents: [
        NavbarComponent,
        ModalComponent,
        LoginComponent,
        ConfirmComponent
    ]
})

export class SharedModule {

}