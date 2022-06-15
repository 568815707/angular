import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface dataI {
  name: string;
  weight: string;
}
@Component({
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDailogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddDailogComponent>,
    private fbs: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: dataI
  ) { 
  }

}


