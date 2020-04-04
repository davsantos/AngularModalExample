'use strict';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../DialogData';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
        @Inject(MAT_DIALOG_DATA) public data: {file: DialogData},
        public dialogRef: MatDialogRef<ModalComponent>){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
