import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'S7Layout',
  templateUrl: './layout.html',
	styleUrls: ['./layout.css']
})
export class LayoutComponent {
  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();
  constructor() { }


  callParent(sendJSON: any){
    this.formChild.emit(sendJSON);
  }

  
}
