import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'S7Accordion',
  templateUrl: 'accordion.html',
  styleUrls: ['./accordion.css']
})
export class AccordionComponent {

  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }


  callParent(sendJSON: any) {
    this.formChild.emit(sendJSON);
  }

}
