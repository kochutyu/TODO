import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/shared/services/todos.service';
import { Router } from '@angular/router';
import { ReadPageService } from 'src/app/shared/services/pages/read-page.service';

@Component({
  selector: 'app-read-page',
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.scss']
})
export class ReadPageComponent implements OnInit {

  constructor(
    public todoS: TodosService,
    private router: Router,
    public readPageS: ReadPageService
  ) { }





  ngOnInit() {
    this.todoS.updateTodos();
  }





  edit(id: number): void {
    this.router.navigate(['/admin', 'read', 'update', `${id}`]);
  }





  delete(id: number): void {
    this.todoS.removeTodo(id);
    this.todoS.updateTodos();
  }
}
