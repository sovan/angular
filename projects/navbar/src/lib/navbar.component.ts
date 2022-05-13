import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-navbar',
  templateUrl: 'lib-navbar.html'
})
export class NavbarComponent implements OnInit {
  @Input() jsonData = {};
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.jsonData)
  }

}
