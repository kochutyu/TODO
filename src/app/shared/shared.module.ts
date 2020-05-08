import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'

// -----------------------
// LIBRARIES
// -----------------------
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
    imports: [
        HttpClientModule,
        MatSliderModule
    ],
    exports: [
        HttpClientModule,
        MatSliderModule
    ]
})

export class SharedModule {

}