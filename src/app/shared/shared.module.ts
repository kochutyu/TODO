import { NgModule } from "@angular/core";

//* -----------------------
//* LIBRARIES
//* -----------------------
import { DemoMaterialModule } from './modules/material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

//* -----------------------
//* DECLARATIONS
//* -----------------------
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './components/modal/login/login.component';
import { ConfirmComponent } from './components/modal/confirm/confirm.component';

//* -----------------------
//* IMPORTS
//* -----------------------
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        NavbarComponent,
        ModalComponent,
        LoginComponent,
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