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
  form: FormGroup;





  constructor(
    public modalS: ModalService
  ) { }





  ngOnInit() {
    this.initForm();
  }





  initForm(): void {

    // FORM FORM
    this.form = new FormGroup({
      email: new FormControl(this.modalS.loginEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.modalS.loginPassword, [Validators.required, Validators.minLength(6)])
    });
  }
}
