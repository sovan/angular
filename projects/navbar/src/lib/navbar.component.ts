import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'S7Navbar',
  templateUrl: 'lib-navbar.html',
  styleUrls: ['./lib-navbar.css']
})
export class NavbarComponent implements OnInit {
  @Input() jsonData = {};
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.jsonData)
  }

}
