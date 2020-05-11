import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreatePageService } from '../../shared/services/pages/create-page.service';
import { UpdatePagesService } from '../../shared/services/pages/update-pages.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss']
})
export class UpdatePageComponent implements OnInit {

  form: FormGroup;





  constructor(
    public createPageS: CreatePageService,
    public updatePageS: UpdatePagesService,
    private modalS: ModalService
  ) { }





  ngOnInit() {

    this.initForm();
  }





  initForm(): void{
    
    // GET DATE FOR EDIT
    this.updatePageS.getTodoData();

    // GROUP FROM
    this.form = new FormGroup({
      name: new FormControl(this.createPageS.name, [Validators.required]),
      description: new FormControl(this.createPageS.description, [Validators.required]),
    });

    // SAVE FORM IN SERVICE FOR RESPONSIVE RESET FORM
    this.createPageS.form = this.form;
  }





  submit(): void {

    // GET MODAL
    this.modalS.openConfirm();

    // GET BTN FOR CONFIRM UPDATE TODO
    this.modalS.confirmUpdateTodo = true;
  }
}

