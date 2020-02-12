import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'client-popup-screen',
  templateUrl: './popup-screen.component.html',
  styleUrls: ['./popup-screen.component.scss']
})
export class PopupScreenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupScreenComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
