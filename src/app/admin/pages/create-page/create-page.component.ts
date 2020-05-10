import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CreatePageService } from '../../shared/services/pages/create-page.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;
  constructor(
    public createPageS: CreatePageService
  ) { }

  ngOnInit() {
    this.createPageS.name = this.createPageS.description = '';
    this.form = new FormGroup({
      name: new FormControl(this.createPageS.name, [Validators.required]),
      description: new FormControl(this.createPageS.description, [Validators.required]),
    });
    this.createPageS.form = this.form;
  }

  submit(): void{
    this.createPageS.setTodo();
  }

}
