import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'S7Modal',
  templateUrl: 'modal.html'
})
export class ModalComponent implements OnInit {
  
  @Input() jsonData: any;
  @Input() targetFrom: any;
  
  @Output() formChild = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  callParent(sendJSON: any){
    this.formChild.emit(sendJSON);
  }
}
