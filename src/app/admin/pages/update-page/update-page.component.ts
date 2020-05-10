import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreatePageService } from '../../shared/services/pages/create-page.service';
import { UpdatePagesService } from '../../shared/services/pages/update-pages.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss']
})
export class UpdatePageComponent implements OnInit {

  form: FormGroup;
  constructor(
    public createPageS: CreatePageService,
    public updatePageS: UpdatePagesService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.createPageS.name, [Validators.required]),
      description: new FormControl(this.createPageS.description, [Validators.required]),
    });
    this.createPageS.form = this.form;
    this.updatePageS.getTodoData();
  }

  submit(): void {
    this.updatePageS.updateTodo();
  }
}

