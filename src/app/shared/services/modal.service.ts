import { Injectable, Inject } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/admin/shared/services/auth.service';
import { FormGroup } from '@angular/forms';

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
  loginMidalStatus: boolean;
  loginStatus: boolean;
  loginEmail: string;
  loginPassword: string;
  loginForm: FormGroup;

  // CONFIRM
  confirmStatus: boolean;
  confirmDeleteTodo: boolean;
  confirmUpdateTodo: boolean;





  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialog: MatDialog,
    public authS: AuthService
  ) { }




  // OPEN LOGIN FORM
  openLoginForm(): void {
    this.resetModal();
    this.loginStatus = true;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      height: '280px',
    });

    dialogRef.afterClosed().subscribe( () => {
      this.resetModal();
    });
  }





  // OPEN CONFIRM
  openConfirm(): void {
    this.resetModal();
    this.confirmStatus = true;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      height: '135px',
    });
  }





  resetModal(): void {
    this.loginStatus =
      this.confirmStatus =
      this.confirmDeleteTodo =
      this.confirmUpdateTodo = false;
    this.loginEmail = this.loginPassword = '';
  }




  // SUBMIT
  submit(submitStatus = false): boolean | void {
    if (this.loginStatus) {
      this.authS.checkLogin(this.loginEmail, this.loginPassword);
    }

    this.dialogRef.close();
    this.resetModal();
  }

}
