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

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MatSliderModule,
        DemoMaterialModule
    ],
    exports: [
        HttpClientModule,
        MatSliderModule,
        NavbarComponent,
        DemoMaterialModule
    ],
     providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    ]
})

export class SharedModule {

}