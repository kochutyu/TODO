import { NgModule } from '@angular/core';

//* -----------------------
//* DECLARATIONS
//* -----------------------
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ReadPageComponent } from './pages/read-page/read-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';

//* -----------------------
//* IMPORTS
//* -----------------------
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';

//* -----------------------
//* PROVIDERS
//* -----------------------
import { AuthService } from './shared/services/auth.service';
import { ModalService } from '../shared/services/modal.service';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreatePageComponent,
    ReadPageComponent,
    UpdatePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: '/admin/read', pathMatch: 'full' },
          { path: 'create', component: CreatePageComponent, canActivate: [AuthGuardService]},
          { path: 'read', component: ReadPageComponent, canActivate: [AuthGuardService]},
          { path: 'read/update/:id', component: UpdatePageComponent, canActivate: [AuthGuardService] },
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
