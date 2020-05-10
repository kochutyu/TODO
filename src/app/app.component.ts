import { Component, OnInit } from '@angular/core';
import { NavbarService } from './shared/services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private navbarS: NavbarService
  ) {
    
  }
  ngOnInit(): void {
    this.checkAuth();
  }

  checkAuth(): void{ // for auth by load page
    if (localStorage.getItem('auth')) {
      const authStatus = !!localStorage.getItem('auth');
      this.navbarS.authStatus = authStatus;
    }
  }

}
