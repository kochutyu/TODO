import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/shared/services/todos.service';
import { IReadTable } from 'src/app/shared/shared.interface';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-read-page',
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.scss']
})

export class ReadPageComponent implements OnInit {
  constructor(
    public todoS: TodosService,
    private router: Router,
    private modalS: ModalService
  ) { }

  ngOnInit() {
    this.todoS.updateTodos();
  }

  edit(id: number): void{
    this.router.navigate(['/admin', 'read', 'update', `${id}`]);
  }

  delete(id: number): void {
    this.modalS.openConfirm();
    this.todoS.removeID = id;
    if (this.modalS.confirmStatus) {
      // this.todoS.removeTodo(id);
      // this.todoS.updateTodos();
    }
    
  }

}
