import { Component, Output, Input, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'S7Grid',
  templateUrl: './grid.html',
  styleUrls: ['./grid.css']
})
export class GridComponent implements OnChanges {
  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();
  headerText: any = 'Form ???';
  gridHeader: any = [];
  gridKey: any = [];
  record: any = {};
  operation: any = {};
  formFields: any = {};
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
  };




  callParent(sendJSON: any) {
    this.formChild.emit(sendJSON);
  }


  passValueToMadal(action: any, record: any = undefined) {
    if (action['callFunction'] == 'edit' || action['callFunction'] == 'view') {
      this.record = record;
    } else if (action['callFunction'] == 'add') {
      this.record = {};
    }
    this.operation = action;
    this.headerText = action['headerText'];
    this.formFields = {};

    Object.keys(this.jsonData['form']).map((value: string) => { //Create the object for creating a form
      if (this.jsonData['form'][value]['show'].indexOf(action['callFunction']) != -1) {
        var fields: any = {};
        fields['lable'] = this.jsonData['form'][value]['lable'];
        if (action['callFunction'] == 'add' || action['callFunction'] == 'edit') {
          fields['type'] = this.jsonData['form'][value]['type'];
          fields['placeHolder'] = this.jsonData['form'][value]['placeHolder'];
          fields['validation'] = this.jsonData['form'][value]['validation'];
        } else {
          fields['type'] = 'show';
        }
        this.formFields[value] = fields;
      }
    });
    //console.log(JSON.stringify(this.formFields))
  }

  ngOnChanges() {
    Object.keys(this.jsonData['form']).map((value: string) => {
      if (this.jsonData['form'][value]['show'] != undefined && this.jsonData['form'][value]['show'].indexOf("list") != -1) { //List column configuration
        this.gridHeader.push(this.jsonData['form'][value]['lable']);
        this.gridKey.push(value);
      }
    });
  }
}
