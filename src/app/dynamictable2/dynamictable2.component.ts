import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
//import { MatTableDataSource } from '@angular/material/table';


  
const inputData: any = 
[{"id":"1","name":"Violet M.","progress":"18","color":"green"},{"id":"2","name":"Charlotte C.","progress":"46","color":"lime"},{"id":"3","name":"Mia O.","progress":"85","color":"fuchsia"},{"id":"4","name":"Thomas O.","progress":"83","color":"teal"},{"id":"5","name":"Oliver T.","progress":"1","color":"yellow"},{"id":"6","name":"Arthur A.","progress":"58","color":"purple"},{"id":"7","name":"Jack T.","progress":"4","color":"red"},{"id":"8","name":"Isabella L.","progress":"40","color":"lime"},{"id":"9","name":"Oliver M.","progress":"2","color":"purple"},{"id":"10","name":"Olivia J.","progress":"66","color":"green"},{"id":"11","name":"Levi A.","progress":"69","color":"black"},{"id":"12","name":"Asher O.","progress":"97","color":"blue"},{"id":"13","name":"Isla I.","progress":"28","color":"orange"},{"id":"14","name":"Amelia J.","progress":"98","color":"green"},{"id":"15","name":"Theodore O.","progress":"45","color":"purple"},{"id":"16","name":"Atticus C.","progress":"42","color":"teal"},{"id":"17","name":"Mia I.","progress":"89","color":"lime"},{"id":"18","name":"Thomas J.","progress":"67","color":"fuchsia"}]
; 


@Component({
  selector: 'dynamictable2',
  styleUrls: ['dynamictable2.component.css'],
  templateUrl: './dynamictable2.component.html'
})
export class DynamicTable2Component
{
  displayedColumns: string[]; 
  dataSource: MatTableDataSource<any>;

  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  //@ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // pringing data to console 
    console.log(JSON.stringify(inputData)); 
    this.displayedColumns = Object.keys(inputData[0]);
    this.dataSource = new MatTableDataSource(inputData);
  }

  ngOnInit() {
   // this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}