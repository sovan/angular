import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'S7Modal',
  templateUrl: 'modal.html',
  styleUrls: ['./modal.css']

})
export class ModalComponent implements OnChanges {
  
  @Input() targetFrom: any;
  @Input() indexJSON: any;
  
  @Output() formChild = new EventEmitter<string>();

  jsonData: any = {};
  constructor() { }

  
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      //console.log(propName);
      if (propName == 'indexJSON' && this.indexJSON!=undefined) {
        var json = this.indexJSON["json"];
        //console.log(JSON.stringify(this.indexJSON['index']))
        this.indexJSON['index'].map((index: any) => {
          //console.log(JSON.stringify(json), index)
          json = json[index];
        });
        this.jsonData = json;
      }
    }
  }

  createIndex(index: any) {
    var returnIndex = [];
    for (var i = 0; i < this.indexJSON['index'].length; i++) {
      returnIndex.push(this.indexJSON['index'][i]);
    }
    for (var i = 0; i < index.length; i++) {
      returnIndex.push(index[i]);
    }
    return returnIndex;
  }

  callParent(sendJSON: any){
    this.formChild.emit(sendJSON);
  }
}
