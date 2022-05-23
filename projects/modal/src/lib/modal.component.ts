import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'S7Modal',
  templateUrl: 'modal.html'
})
export class ModalComponent implements OnInit {
  
  @Input() jsonData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
