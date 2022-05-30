import { Component, Output, Input, EventEmitter, OnChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'S7Grid',
  templateUrl: './grid.html',
  styleUrls: ['./grid.css']
})
export class GridComponent implements OnChanges {
  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();
  @ViewChild('closeBtn') closeBtn!: ElementRef;
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
    if (sendJSON['operation'] == 'save') { //Click on Insert
      if (sendJSON['isFormValid'] == 'valid') {
        this.formChild.emit(sendJSON);
        this.closeModal();
      } else {
        console.log('Invalid form');
      }
    } else if (sendJSON['operation'] == 'update') { //Click on Update
      if (sendJSON['isFormValid'] == 'valid') {
        this.formChild.emit(sendJSON);
        this.closeModal();
      } else {
        console.log('Invalid form');
      }
    } else if (sendJSON['operation'] == 'confirm-delete') { //Click on confirm-delete
      this.formChild.emit(sendJSON);
      this.closeModal();
    } else if (sendJSON['operation'] == 'download-as-xlx') { //Click on Download As XLX
      this.formChild.emit(sendJSON);
      this.closeModal();
    } else if (sendJSON['operation'] == 'download-as-csv') { //Click on Download As CSV
      this.formChild.emit(sendJSON);
      this.closeModal();
    } else {
      console.log(sendJSON['operation']);
    }

  }

  /*
    Get modal contents form data
  */
  getValueOfModal(action: any) {
    this.hookToGrid = 'doNotFire';
    if (this.operation['callFunction'] == 'delete') {
      var data: any = {};
      data['formValue'] = this.record;
      data['callFunction'] = this.operation['callFunction'];
      data['isFormValid'] = 'valid';
      data['url'] = this.jsonData['url'];
      data['operation'] = action["callFunction"];
      data['tag'] = 'database';
      this.callParent(data);
    } else if (this.operation['callFunction'] == 'download') {
      var data: any = {};
      data['formValue'] = this.jsonData['records'];
      data['callFunction'] = this.operation['callFunction'];
      data['isFormValid'] = 'valid';
      data['url'] = this.jsonData['url'];
      data['operation'] = action["callFunction"];
      data['tag'] = 'database';
      this.callParent(data);
    } else {
      this.popupWhicButtonClicked = action;
      this.hookToGrid = new Date().getTime();
    }

  }

  /*
  Data sent by the Form by hooking ngonchange in form component
  */
  sentValueOfValueByForm(data: any) {
    data['url'] = this.jsonData['url'];
    data['operation'] = this.popupWhicButtonClicked['callFunction'];
    data['tag'] = "database";
    this.callParent(data);
  }



  /*
    close modal call 
  */
  private closeModal(): void {
    setTimeout(() => {
      this.closeBtn.nativeElement.click();
    }, 500);
  }

  /*
  Creating the modal contents for forms
  */
  setValueToModal(action: any, record: any = undefined) {
    if (action['callFunction'] == 'edit' || action['callFunction'] == 'view' || action['callFunction'] == 'delete') {
      this.record = record;
    } else if (action['callFunction'] == 'add' || action['callFunction'] == 'download') {
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
    //When records loaded then creating the grid
    Object.keys(this.jsonData['form']).map((value: string) => {
      if (this.jsonData['form'][value]['show'] != undefined && this.jsonData['form'][value]['show'].indexOf("list") != -1) { //List column configuration
        this.gridHeader.push(this.jsonData['form'][value]['lable']);
        this.gridKey.push(value);
      }
    });
  }


}
