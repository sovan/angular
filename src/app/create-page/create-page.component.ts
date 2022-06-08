import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'S7CreatePage',
  templateUrl: './create-page.html',
  styleUrls: ['./create-page.css']
})
export class CreatePageComponent implements OnInit {
  menuTopLeftPosition = { x: '0', y: '0' }
  showRightMenu: boolean = false;
  headerPopup: string = '';
  selectedWidget: any = {};
  dropdown: any = [
    {
      "value": "card",
      "text": "Container",
      "headerText": "Add a Container",
      "radio": [{
        "value": "col-sm-1",
        "lable": "Twelve Column"
      },{
        "value": "col-sm-2",
        "lable": "Six Column"
      }, {
        "value": "col-sm-3",
        "lable": "Four Column"
      }, {
        "value": "col-sm-6",
        "lable": "Two Column"
      }, {
        "value": "col-sm-12",
        "lable": "One Column"
      }]
    },
    {
      "value": "accordion",
      "text": "Accordion",
      "headerText": "Add a Accordion",
      "radio": []
    },
    {
      "value": "breadcumb",
      "text": "Breadcumb",
      "headerText": "Add a Breadcumb",
      "radio": []
    }
  ];
  // reference to the MatMenuTrigger in the DOM 
  constructor(private ElByClassName: ElementRef) { }

  ngAfterViewInit() {

    //btnElement.innerHTML = 'This is Button';
  }


  ngOnInit(): void {
  }


  createWidget(value: string) {

    //Creation of Header 
    var selectedWidget = this.dropdown.filter((items: any) => {
      if (items['value'] == value) {
        return items;
      }
    });
    this.selectedWidget = selectedWidget[0];
    this.headerPopup = selectedWidget[0]['headerText'];

    //Other activity
    this.showRightMenu = false;

  }
  closeRightMenu() {
    this.showRightMenu = false;
  }
  mouseEvent(event: any) {
    const boxes = document.querySelectorAll('.active');
    boxes.forEach(box => {
      box.classList.remove('active');
    });
    event.currentTarget.className += ' active';
  }


  onRightClick(event: MouseEvent, id: any) {
    event.preventDefault();
    event.stopPropagation();
    this.menuTopLeftPosition.x = event.clientX + 'px';
    this.menuTopLeftPosition.y = event.clientY + 'px';
    this.showRightMenu = true;
    console.log(id)
    setTimeout(() => {
      //this.showRightMenu = false;
    }, 3000);
  }
}
