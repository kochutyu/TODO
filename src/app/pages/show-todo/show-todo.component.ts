import { Component, OnInit } from '@angular/core';
import { ReadPageService } from 'src/app/shared/services/pages/read-page.service';
import { ShowTodoService } from 'src/app/shared/services/pages/show-todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.scss']
})
export class ShowTodoComponent implements OnInit {

  constructor(
    public readPageS: ReadPageService,
    public showTodoS: ShowTodoService,
    private router: Router
  ) {
  }





  ngOnInit() {

    this.showTodoS.getDataTodo();
  }





  goBack(): void {

    this.router.navigate(['/read']);
  }




  
}
