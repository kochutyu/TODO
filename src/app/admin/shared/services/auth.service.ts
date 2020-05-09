import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdmin } from 'src/app/shared/shared.interface';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Admin } from 'src/app/shared/shared.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  checkLogin(email:string, password:string): void {
    this.getAdminInfo().subscribe((res:IAdmin) => { 
      const admin = new Admin(email, password);
      if (admin.email === res.email && admin.password === res.password) {
        this.setToken(admin);
        this.router.navigate(['/admin', 'read']);
      } else {
        this.setErrorMessage();
      }
    });
    
  }


  private getAdminInfo(): Observable<IAdmin> {
    return this.http.get<IAdmin>(' http://localhost:3000/admin');
  }

  private setToken(admin: Admin): void{
    localStorage.setItem('auth', JSON.stringify(true))
  }

  private setErrorMessage(): void{
    this._snackBar.open('You are not admin!', "Please try logging in again!", {
      duration: 1000,
    });
  }
}
