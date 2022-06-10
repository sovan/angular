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
  dragableWidget: any = '';
  selectedWidget: any = '';
  mouseMoveTargetID: any = '';
  formValue: any = {
    "container-size": "col-sm-12"
  };
  layoutJSON: any = {
    "json": {
      "content": [{
        "column": "12",
        "body": []
      }]
    },
    "index": ["content"]
  }

  dropdown: any = [
    {
      "value": "card",
      "text": "Container",
      "headerText": "Add a Container",
      "radio": [{
        "value": "col-sm-1",
        "lable": "Twelve Column"
      }, {
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



  ngOnInit(): void {
  }


  getID(event: any) {
    var id = event.id;
    if (id == "") {
      id = this.getID(event.parentNode);
    }
    return id;
  }



  mouseEvent(event: any) {

    switch (event['type']) {



      case "mousemove": {
        const boxes = document.querySelectorAll('.showSelectedSpace');
        boxes.forEach(box => {
          box.classList.remove('showSelectedSpace');
        });
        this.mouseMoveTargetID = this.getID(event.target);
        if (this.mouseMoveTargetID != undefined && this.mouseMoveTargetID != null && this.mouseMoveTargetID != "") {
          var targetID = this.mouseMoveTargetID.split('-');
          if (targetID[0] == 'sidebar' || targetID[0] == 'body' || targetID[0] == 'fullbody' || targetID[0] == 'breadcrumb') {
            document.getElementById(this.mouseMoveTargetID)?.classList.add('showSelectedSpace');
          }
        }
        break;
      }


      case "mousedown": {
        var targetID = this.mouseMoveTargetID.split('-');
        if (targetID[0] == 'sidebar') {
          this.dragableWidget = targetID[1];
        } else if (targetID[0] == 'breadcrumb') {
          this.selectedWidget = this.mouseMoveTargetID;
          const boxes = document.querySelectorAll('.selectedWidget');
          boxes.forEach(box => {
            box.classList.remove('selectedWidget');
          });
          document.getElementById(this.selectedWidget)?.classList.add('selectedWidget');
        } else {
          console.log(targetID)
        }
        break;
      }



      case "mouseup": {
        var targetID = event['target']['id'].split('-');
        if (targetID[0] == 'body') {
          switch (this.dragableWidget) {
            case "card": {
              break;
            }
            case "breadcumb": {
              this.layoutJSON['json']['content'][0]['body'].push({ "tag": "breadcumb", "allLinks": [{ "redirectTo": "/home", "tag": "redirection", "text": "Home" }, { "tag": "text", "text": "Users" }] });
              break;
            }
            default: {
              console.log(this.dragableWidget + ' confifuration required ...')
            }
          }
        }
        this.dragableWidget = '';
        break;
      }



      default: {
        console.log(event['target']['id'], event['type'], this.dragableWidget);
      }
    }
  }
}
