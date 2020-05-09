import { Component, OnInit, Inject } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  animal: string;
  name: string;
  constructor(
    public dialogRef: MatDialogRef<NavbarComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public navbarS: NavbarService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

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

}
