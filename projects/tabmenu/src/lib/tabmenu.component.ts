import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'S7Tabmenu',
  templateUrl: 'tabmenu.html',
  styleUrls: ['./tabmenu.css']
})
export class TabmenuComponent {

  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }

  

  callParent(sendJSON: any){
    this.formChild.emit(sendJSON);
  }


}
