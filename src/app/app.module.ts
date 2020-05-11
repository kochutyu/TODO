import { NgModule } from '@angular/core';

//* -----------------------
//* DECLARATION
//* -----------------------
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { ReadPageComponent } from './pages/read-page/read-page.component';
import { ShowTodoComponent } from './pages/show-todo/show-todo.component';

//* -----------------------
//* IMPORTS
//* -----------------------
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ReadPageComponent,
    ShowTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
