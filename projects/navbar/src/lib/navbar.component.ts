import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'S7Navbar',
  templateUrl: 'navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  @Input() jsonData: any;
  containerWidth: any = {};
  containerHeight: any = {};
  constructor() { }

  ngOnInit(): void {
    //console.log(this.jsonData)
  }


  findWidth(e: any, levels: string) {
    this.containerWidth[levels] = e.target.clientWidth;
    this.containerHeight[levels] = e.target.clientHeight;
  }
}
