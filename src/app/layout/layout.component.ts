import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'S7Layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent implements OnChanges, OnInit {
  @Input() indexJSON: any;
  @Input() action: any;
  @Output() formChild = new EventEmitter<string>();
  jsonData: any = {};
  developmentMode: boolean = false;

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

  ngOnInit(): void {
    this.developmentMode = sessionStorage.getItem('developmentMode') == 'true' ? true : false;
  }
  openModal(data: any) {
    this.callParent({ "tag": "button-popup", "index": data });
  }

  openFormModal(data: any) {
    //console.log(data)
    this.callParent({ "tag": "form", "index": data });
  }


  createDynamicCID(type: any = '', currentIndex: any = []) {
    let url = type + "-" + this.indexJSON['index'].join('-') + '-' + currentIndex.join('-');
    return url;
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
