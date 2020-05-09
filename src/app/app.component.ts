import { Component, OnInit } from '@angular/core';
import { NavbarService } from './shared/services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private navbarS: NavbarService,
    private router: Router
  ) {
    
  }
  ngOnInit(): void {
    this.checkAuth();
  }

  checkAuth(): void{
    if (localStorage.getItem('auth')) {
      const authStatus = !!localStorage.getItem('auth');
      this.navbarS.authStatus = authStatus;
      this.router.navigate(['admin', 'read']);
    }
  }

}
