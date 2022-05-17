import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'S7DropDown',
  templateUrl: 'dropdown.html',
  styleUrls: ['./dropdown.css']
})
export class DropdownComponent implements OnInit {
  @Input() eachMenu: any;
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.eachMenu))
  }
  findWidth(e: any, levels: string) {
    this.containerWidth[levels] = e.target.clientWidth;
    this.containerHeight[levels] = e.target.clientHeight;
    //console.log(e.target.setAttribute('class','ddddd'))
  }
}
