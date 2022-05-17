import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'S7DropDown',
  templateUrl: 'dropdown.html',
  styleUrls: ['./dropdown.css']
})
export class DropdownComponent implements OnInit {
  @Input() eachMenu: any;
  @Output() redirectTo = new EventEmitter<string>();
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.eachMenu))
  }
  findWidth(e: any) {
    this.containerWidth = e.target.clientWidth;
    this.containerHeight = e.target.clientHeight;
  }
  redirectURL(URL: string){
    this.redirectTo.emit(URL);
  }
}
