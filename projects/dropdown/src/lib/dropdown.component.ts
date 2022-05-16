import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'S7DropDown',
  templateUrl: 'dropdown.html',
  styleUrls: ['./dropdown.css']
})
export class DropdownComponent implements OnInit {
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  findWidth(e: any, levels: string) {
    this.containerWidth[levels] = e.target.clientWidth;
    this.containerHeight[levels] = e.target.clientHeight;
  }
}
