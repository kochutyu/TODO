import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true; // hide password

  // FOR FORM
  email = new FormControl(this.modalS.loginEmail, [Validators.required, Validators.email]);
  password = new FormControl(this.modalS.loginEmail, [Validators.required, Validators.minLength(6)]);


  constructor(
    public modalS: ModalService
  ) { }

  ngOnInit() {
  }


}
