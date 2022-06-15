import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDailogComponent {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddDailogComponent>,
    private fbs: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: unknown
  ) { 

    this.form = this.fbs.group({
      name: [null]
    });
  }
  submit() {
    console.log(this.form.value)
  }
}


