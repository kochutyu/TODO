import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdmin } from 'src/app/shared/shared.interface';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/shared/shared.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router,
    private navbarS: NavbarService
  ) { }

  checkLogin(email:string, password:string): void {
    this.getAdminInfo().subscribe((res: IAdmin) => {
      
      const admin = new Admin(email, password);

      if (admin.email === res.email && admin.password === res.password) {

        this.setToken(admin);
        this.navbarS.authStatus = true;
        this.router.navigate(['/admin', 'read']);
      } else {

        this.setErrorMessage();
      }
    });
  }

  logOut(): void{
    if (localStorage.getItem('auth')) {
      this.removeToken();
      this.navbarS.authStatus = false;
      this.router.navigate(['/']);
    }
  }


  private getAdminInfo(): Observable<IAdmin> {
    return this.http.get<IAdmin>(' http://localhost:3000/admin');
  }

  private setToken(admin: Admin): void{
    localStorage.setItem('auth', JSON.stringify(true))
  }

  private removeToken(): void{
    localStorage.removeItem('auth');
  }

  private setErrorMessage(): void{
    this._snackBar.open('You are not admin!', "Please try logging in again!", {
      duration: 3000,
    });
  }
}
