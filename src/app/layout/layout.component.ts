import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'S7Layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent implements OnChanges {
  @Input() indexJSON: any;
  @Input() action: any;
  @Output() formChild = new EventEmitter<string>();
  jsonData: any = {};


  hookToGrid: any = 'doNotFire';

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

  callParent(sendJSON: any) {
    this.formChild.emit(sendJSON);
  }

  openModal(data: any) {
    this.callParent({ "tag": "button-popup", "index": data });
  }

  openFormModal(data: any) {
    //console.log(data)
    this.callParent({ "tag": "form", "index": data });
  }


  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'indexJSON') {
        var json = this.indexJSON['json'];
        this.indexJSON['index'].map((index: any) => {
          json = json[index];
        });
        this.jsonData = json;
      }
    }
  }


}
