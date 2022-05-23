import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'S7DropDown',
  templateUrl: 'dropdown.html',
  styleUrls: ['./dropdown.css']
})
export class DropdownComponent {
  @Input() eachMenu: any;
  @Input() place: any;

  @Output() formChild = new EventEmitter<string>();
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }

  
  findWidth(e: any) {
    if (this.place=='left') {
      this.containerWidth = -160;
    } else {
      this.containerWidth = e.target.clientWidth;
    }
    this.containerHeight = e.target.clientHeight;
  }

 callParent(sendJSON: any){
    this.formChild.emit(sendJSON);
  }

}
