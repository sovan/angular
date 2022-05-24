import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'S7Grid',
  templateUrl: './grid.html',
  styleUrls: ['./grid.css']
})
export class GridComponent implements OnInit {
  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();
  constructor() { }


  popupBoxData: any = {
    "tag": "button-popup",
    "id": "1",
    "headerText": "Are you sure you want to logout?",
    "content": [{
      "column": "12",
      "body": [{
        "tag": "form",
        "content": "UM p2",
        "header": ["col1", "col2", "col3"],
        "records": [
          ["1", "2", "3"]
        ]
      }]
    }]
  }


  makeJSON(data: any, option: any) {
    console.log(option)
    this.popupBoxData['option'] = option;
    this.callParent(this.popupBoxData)
  }

  ngOnInit(): void {
  }

  callParent(sendJSON: any) {
    this.formChild.emit(sendJSON);
  }

}
