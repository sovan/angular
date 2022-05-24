import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'S7Form',
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class FormComponent implements OnChanges {
  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();

  headers: any = [];
  constructor() { }


  ngOnChanges() {
    this.headers = Object.keys(this.jsonData);
  }
}
