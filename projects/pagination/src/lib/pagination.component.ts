import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'S7Pagination',
  templateUrl: 'pagination.html',
  styleUrls: ['./pagination.css']
})
export class PaginationComponent {

  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }



  callParent(sendJSON: any) {
    this.formChild.emit(sendJSON);
  }


}