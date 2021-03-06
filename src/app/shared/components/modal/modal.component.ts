import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalService } from '../../services/modal.service';
import { TodosService } from '../../services/todos.service';
import { UpdatePagesService } from 'src/app/admin/shared/services/pages/update-pages.service';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  constructor(
    public modalS: ModalService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private todoS: TodosService,
    private updatePageS: UpdatePagesService
  ) {
  }

  ngOnInit(): void {

    // SAVE MODAL IN SERVICE FOR RESPONSIVE MANAGE
    this.modalS.dialogRef = this.dialogRef;
  }

  login(): void {
    this.modalS.submit()
  }

  deleteTodo(): void {
    this.todoS.deleteTodo();
    this.modalS.submit();
  }

  updateTodo(): void{
    this.updatePageS.updateTodo();
    this.modalS.submit();
  }


}
