import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'S7Layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent {
  @Input() indexJSON: any;
  @Output() formChild = new EventEmitter<string>();
  jsonData: any = {};

  constructor() {
    //console.log(JSON.stringify(this.indexJSON));

  }
}
