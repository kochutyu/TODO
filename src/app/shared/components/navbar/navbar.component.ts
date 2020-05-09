import { Component, OnInit, Inject } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ModalService } from '../../services/modal.service';
import { AuthService } from 'src/app/admin/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    public navbarS: NavbarService,
    public modalS: ModalService,
    public authS: AuthService
  ) { }

  ngOnInit() {
  }

}
