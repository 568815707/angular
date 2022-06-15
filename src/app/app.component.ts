import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DailogComponent } from 'src/components/dialog/dialog.component'
import { AddDailogComponent } from 'src/components/add-dialog/add-dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  @ViewChild(MatTable) 'table': MatTable<PeriodicElement>;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      no: [null]
    });
    
  }
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'operation', 'remove'];
  dataSource = [...ELEMENT_DATA];

  viewModal(element: PeriodicElement) {
    const dialogConfig: MatDialogConfig = {
      disableClose: true,
      data: {
        title: 'View',
        ok: 'ok',
        cancel: 'cancel',
        element: element,
      }
    };

    const dialogRef =this.dialog.open(DailogComponent, dialogConfig );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addFormModal() {
    const dialogConfig: MatDialogConfig = {
      data: {
        name: '',
        weight: ''
      }
    };

    const dialogRef = this.dialog.open(AddDailogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result.name) {
        const no = this.dataSource.length;
        const newData: PeriodicElement  = { position: no + 1, name: `No.${no}`, weight: 20.17971, symbol: 'new', operation: 'view' };
        this.dataSource.push({ ...newData, ...result })
        this.table.renderRows();
  
      }
    });
  }

  addItem() {
    const no = this.dataSource.length;
    const newData: PeriodicElement  = { position: no + 1, name: `No.${no}`, weight: 20.17971, symbol: 'new', operation: 'view' };
    this.dataSource.push(newData);
    this.table.renderRows();
  }

  deleteItem(i: number) {
    this.dataSource.splice(i, 1)
    this.table.renderRows();
  }
  search() {
    const { no } = this.form.value

    this.dataSource = this.dataSource.filter(({ position }) => position === Number(no) )
  }
  reset() {
    this.dataSource = ELEMENT_DATA;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  operation: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', operation: 'View'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', operation: 'View'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', operation: 'View'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', operation: 'View'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', operation: 'View'},
  {position: 6, name: 'Carbon', weight: 10.811, symbol: 'B', operation: 'View'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', operation: 'View'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', operation: 'View'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', operation: 'View'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', operation: 'View'},
];


