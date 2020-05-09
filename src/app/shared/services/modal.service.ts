import { Injectable, Inject } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  animal: string;
  name: string;
  constructor(
    public dialogRef: MatDialogRef<ModalService>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialog: MatDialog
  ) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      height: '400px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
