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
  footerButton: any = [];
  constructor() { }
  hookToGrid: any = 'doNotFire';
  popupWhicButtonClicked: any = '';

  callParent(sendJSON: any) {
    this.formChild.emit(sendJSON);
  }

  readValueOfForm(action: any) {
    this.popupWhicButtonClicked = action;
    this.hookToGrid = new Date().getTime();
  }


  passValueToModal(action: any, record: any = undefined) {
    if (action['callFunction'] == 'edit' || action['callFunction'] == 'view' || action['callFunction'] == 'delete') {
      this.record = record;
    } else if (action['callFunction'] == 'add') {
      this.record = {};
    }
    this.operation = action;
    this.headerText = action['headerText'];
    this.formFields = {};

    this.footerButton = action['operationOnPopup'];
    
    Object.keys(this.jsonData['form']).map((value: string) => { //Create the object for creating a form
      if (this.jsonData['form'][value]['show'].indexOf(action['callFunction']) != -1) {
        var fields: any = {};
        fields['lable'] = this.jsonData['form'][value]['lable'];
        if (action['callFunction'] == 'add' || action['callFunction'] == 'edit') {
          fields['type'] = this.jsonData['form'][value]['type'];
          fields['placeHolder'] = this.jsonData['form'][value]['placeHolder'];
          fields['validation'] = this.jsonData['form'][value]['validation'];
        } else if (action['callFunction'] == 'view') {
          fields['type'] = 'show';
        }
        this.formFields[value] = fields;
      }
    });
  }

  ngOnChanges() {
    Object.keys(this.jsonData['form']).map((value: string) => {
      if (this.jsonData['form'][value]['show'] != undefined && this.jsonData['form'][value]['show'].indexOf("list") != -1) { //List column configuration
        this.gridHeader.push(this.jsonData['form'][value]['lable']);
        this.gridKey.push(value);
      }
    });
  }

  activityOnFormValue(data: any){
    data['url'] = this.jsonData['url'];
    data['operation'] = this.popupWhicButtonClicked['callFunction'];
    data['tag'] = "database";
    this.formChild.emit(data);
  }
}
