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

@NgModule({
    declarations: [
        NavbarComponent,
        ModalComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DemoMaterialModule,
    ],
    exports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DemoMaterialModule,
        ModalComponent,
        NavbarComponent,
        ModalComponent,
        LoginComponent
    ],
     providers: [
         { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
         { provide: MatDialogRef, useValue: {} },
         { provide: MAT_DIALOG_DATA, useValue: [] },
    ],
    entryComponents: [
        NavbarComponent,
        ModalComponent,
        LoginComponent
    ]
})

export class SharedModule {

}