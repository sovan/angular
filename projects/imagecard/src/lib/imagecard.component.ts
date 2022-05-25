import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'S7Imagecard',
  templateUrl: 'imagecard.html',
  styleUrls: ['./imagecard.css']
})
export class ImagecardComponent {

  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }


  callParent(sendJSON: any) {
    this.formChild.emit(sendJSON);
  }

}