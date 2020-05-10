import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReadPageComponent } from './pages/read-page/read-page.component';
import { ShowTodoComponent } from './pages/show-todo/show-todo.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/read', pathMatch: 'full'},
      { path: 'read', component: ReadPageComponent },
      { path: 'read/:id', component: ShowTodoComponent },
    ]
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
