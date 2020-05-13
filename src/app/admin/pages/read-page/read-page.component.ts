import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/shared/services/todos.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/services/modal.service';
import { UpdatePagesService } from '../../shared/services/pages/update-pages.service';
import { ITodo } from 'src/app/shared/shared.interface';

@Component({
  selector: 'app-read-page',
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.scss']
})

export class ReadPageComponent implements OnInit {

  constructor(
    public todoS: TodosService,
    private router: Router,
    private modalS: ModalService,
    private updatePageS: UpdatePagesService
  ) { }





  ngOnInit() {
    this.todoS.updateTodos();
  }





  // EDIT TODO
  edit(id: number): void{
    this.router.navigate(['/admin', 'read', 'update', `${id}`]);
    this.updatePageS.todo = this.todoS.dataSource.find((todo: ITodo) => todo.id === id);
    this.todoS.setTodoJSON(this.updatePageS.todo);
  }





  // DELETE TODO
  delete(id: number): void {
    this.todoS.removeID = id;

    // GET MODAL
    this.modalS.openConfirm();

    // GET BTN FOR CONFIRM DELETE TODO
    this.modalS.confirmDeleteTodo = true;
  }
}
