import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'S7Navbar',
  templateUrl: 'navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  @Input() jsonData: any;
  @Output() redirectTo = new EventEmitter<string>();
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }

  findWidth(e: any, levels: string) {
    this.containerWidth[levels] = e.target.clientWidth;
    this.containerHeight[levels] = e.target.clientHeight;
  }

  redirectURL(URL: string) {
    this.redirectTo.emit(URL)
  }
}
