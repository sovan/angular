import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'S7Grid',
  templateUrl: './grid.html',
  styleUrls: ['./grid.css']
})
export class GridComponent {
  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();
  constructor() { }


  popupBoxData: any = {
    "tag": "button-popup",
    "id": "1",
    "content": [{
      "column": "12",
      "body": [{
        "tag": "form"
      }]
    }]
  }


  makeJSON(record: any, option: any) {
    this.popupBoxData["headerText"] = option['headerText'];
    var recordJSON: any = {};
    this.jsonData["header"].map((data: any, index: any) => {
      if (data["show"].indexOf(option['do']) != -1) {
        recordJSON[data["text"]] = record[index];
      }
    });
    this.popupBoxData["content"][0]["body"][0]["data"] = recordJSON;
    this.popupBoxData['option'] = option['do'];
    this.callParent(this.popupBoxData)
  }

  callParent(sendJSON: any) {
    this.formChild.emit(sendJSON);
  }

}