import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'S7Breadcrumb',
  templateUrl: 'breadcrumb.html',
  styleUrls: ['./breadcrumb.css']
})
export class BreadcrumbComponent {

  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }



  callParent(sendJSON: any) {
    this.formChild.emit(sendJSON);
  }


}