import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'S7Slider',
  templateUrl: 'slider.html',
  styleUrls: ['./slider.css']
})
export class SliderComponent  {

  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }


  callParent(sendJSON: any) {
    this.formChild.emit(sendJSON);
  }


}