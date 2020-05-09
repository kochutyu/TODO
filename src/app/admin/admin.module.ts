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
import { AuthService } from './shared/services/auth.service';
import { ModalService } from '../shared/services/modal.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
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
          { path: '', redirectTo: '/admin/read', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent, canActivate: [AuthGuardService]},
          { path: 'create', component: CreatePageComponent, canActivate: [AuthGuardService]},
          { path: 'read', component: ReadPageComponent, canActivate: [AuthGuardService]},
          { path: 'delete', component: DeletePageComponent, canActivate: [AuthGuardService]},
          { path: 'read/:id/update', component: UpdatePageComponent, canActivate: [AuthGuardService] },
          { path: '**', redirectTo: '/admin/read'}
        ]
      }
    ])
  ],
  providers: [
    AuthService, ModalService
  ],
  exports: [RouterModule]
})
export class AdminModule {

}
