import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'S7Layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent {
  @Input() jsonData: any;
  @Output() formChild = new EventEmitter<string>();

  hookToGrid: any = 'doNotFire';
  formJSONData: any = {};
  constructor() { }
  operation: any = '';

  callParent(sendJSON: any) {
    this.formChild.emit(sendJSON);
  }

  generateForm(json: any) {
    this.formJSONData = JSON.parse(JSON.stringify(json));
  }


  getValueOfModal(action: any, operation: any) {
    this.hookToGrid = new Date().getTime();
    this.operation = operation['callFunction']
  }

  /*
  Data sent by the Form by hooking ngOnChange in form component
  */
  sentValueByForm(data: any, others: any) {
    if (this.operation != 'close' && data['isFormValid'] == 'valid') {
      data['url'] = others['url'];
      data['operation'] = this.operation;
      data['tag'] = "database";
      delete (data['callFunction']);
      this.callParent(data);
    }
  }

}
