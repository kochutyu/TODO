import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CreatePageService } from '../../shared/services/pages/create-page.service';

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
    this.initForm();
  }
  




  initForm(): void{
    // START VALUE FOR FORM
    this.createPageS.resetData();

    // GROUP FROM
    this.form = new FormGroup({
      name: new FormControl(this.createPageS.name, [Validators.required]),
      description: new FormControl(this.createPageS.description, [Validators.required]),
    });

    // SAVE FORM IN SERVICE FOR RESPONSIVE RESET FORM
    this.createPageS.form = this.form;
  }





  submit(): void{

    // CREATE TODO
    this.createPageS.setTodo();
  }

}
