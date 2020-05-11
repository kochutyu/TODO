import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { ReadPageService } from 'src/app/shared/services/pages/read-page.service';
import { ShowTodoService } from 'src/app/shared/services/pages/show-todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.scss']
})
export class ShowTodoComponent implements OnInit{

  constructor(
    public readPageS: ReadPageService,
    public showTodoS: ShowTodoService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.readPageS.readTodo(this.showTodoS.getId());
  }

  goBack(): void{
    this.router.navigate(['/read']);
  }

}
