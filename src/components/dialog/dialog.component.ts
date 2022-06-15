import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PeriodicElement } from '../../app/app.component';

export interface RoleData{
  title: string;
  ok: string;
  cancel: string;
  element: PeriodicElement;
}

@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DailogComponent {
  constructor(
    public dialogRef: MatDialogRef<DailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RoleData
  ) { 
    
  }

}


