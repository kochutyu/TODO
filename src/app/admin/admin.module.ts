import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// -----------------------
// DECLARATIONS
// -----------------------
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ReadPageComponent } from './pages/read-page/read-page.component';
import { DeletePageComponent } from './pages/delete-page/delete-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreatePageComponent,
    ReadPageComponent,
    DeletePageComponent,
    UpdatePageComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'create', component: CreatePageComponent },
          { path: 'read', component: ReadPageComponent },
          { path: 'delete', component: DeletePageComponent },
          { path: 'read/:id/update', component: UpdatePageComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule {

}
