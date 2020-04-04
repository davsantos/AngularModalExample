import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatInputModule} from '@angular/material';
import { DialogData } from './DialogData';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Beiuh');
      this.animal = result;
    });
  }
}
