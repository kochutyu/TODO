import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/shared/services/todos.service';
import { IReadTable } from 'src/app/shared/shared.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-page',
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.scss']
})

export class ReadPageComponent implements OnInit {
  constructor(
    public todoS: TodosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todoS.updateTodos();
  }

  edit(id: number): void{
    this.router.navigate(['/admin', 'read', 'update', `${id}`]);
  }

  delete(id: number): void {
    this.todoS.removeTodo(id);
    this.todoS.updateTodos();
  }

}
