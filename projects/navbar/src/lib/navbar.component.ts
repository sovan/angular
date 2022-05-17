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

  

  redirectURL(URL: string) {
    this.redirectTo.emit(URL)
  }
}
