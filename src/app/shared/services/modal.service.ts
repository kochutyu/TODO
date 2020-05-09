import { Injectable, Inject } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  animal: string;
  name: string;

  // DEFAULT SETTINGS
  modalWidth: string = '600px';
  modalHeight: string = '300px';

  // LOGIN
  loginStatus: boolean;
  loginEmail: string;
  loginPassword: string;


  constructor(
    public dialogRef: MatDialogRef<ModalService>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialog: MatDialog
  ) { }

  openLoginForm(): void {
    this.loginStatus = true;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: this.modalWidth,
      height: '280px',
      data: { name: this.loginEmail, animal: this.loginPassword }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.resetModal();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.resetModal()
  }


  resetModal(): void {
    this.loginStatus = false;
    this.loginEmail = this.loginPassword = '';
  }

  submit(): void{
    if (this.loginStatus) { 
      alert('Login');
    }
    this.resetModal();
  }

}
