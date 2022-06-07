import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges ,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'S7Modal',
  templateUrl: 'modal.html',
  styleUrls: ['./modal.css']

})
export class ModalComponent implements OnChanges {
  
  @Input() action: any;
  @Input() indexJSON: any;
  @ViewChild('closeBtn') closeBtn!: ElementRef;

  @Output() formChild = new EventEmitter<string>();

  jsonData: any = {};
  constructor() { }

  
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'indexJSON' && this.indexJSON!=undefined) {
        var json = this.indexJSON["json"];
        this.indexJSON['index'].map((index: any) => {
          json = json[index];
        });
        this.jsonData = json;
      } else if(propName == 'action'){
        if(this.action['action']=='close'){
          this.closeBtn.nativeElement.click();
        } 
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
