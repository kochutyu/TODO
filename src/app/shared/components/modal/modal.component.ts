import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalService } from '../../services/modal.service';
import { TodosService } from '../../services/todos.service';
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
    private todoS: TodosService
  ) {
    this.modalS.dialogRef = this.dialogRef;
  }

  ngOnInit(): void {
  }

  login(): void {
    this.modalS.submit()
  }

  deleteTodo(): void {
    this.todoS.deleteTodo();
    this.modalS.submit(true);
  }


}
