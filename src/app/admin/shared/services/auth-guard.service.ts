import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router
  ) { }





  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    // GET KEY FROM LOCALSTORAGE FOR AUDIT FOR AUTHORIZATION
    const authStatus = localStorage.getItem('auth');

    if (!authStatus) { // IF LOCAL STORAGE HAVE NOT KEY
      this.router.navigate(['/']);
      return false
    } else { // IF LOCAL STORAGE HAVE KEY

      return true
    }
  }
}
