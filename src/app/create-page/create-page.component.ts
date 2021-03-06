import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { map } from 'rxjs';

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
  canBeSelected: any = ["body", "breadcumb", "accordion", "p", "h3", "h5", "imagecard", "grid", "row", "new", "card"];
  onMouseOverBorder: any = ["fullbody", "body", "sidebar", "breadcumb", "accordion", "p", "h3", "h5", "imagecard", "grid", "row", "new", "card"];
  dragableWidgetArray: any = ["card", "breadcumb", "accordion", "grid", "new", "card"];
  theme: any = {
    "breadcumb": { "tag": "breadcumb", "allLinks": [{ "redirectTo": "/home", "tag": "redirection", "text": "Home" }, { "tag": "text", "text": "Users" }] },
    "accordion": { "tag": "accordion", "id": "2", "content": [{ "title": "Acc 1", "content": [{ "column": "6", "body": [{ "tag": "p", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }] }, { "column": "6", "body": [{ "tag": "p", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }] }] }, { "title": "Acc 22", "content": [{ "column": "3", "body": [{ "tag": "image-card", "image": "https://www.w3schools.com/howto/img_mountains_wide.jpg", "content": [{ "column": "12", "body": [{ "tag": "h5", "content": "Image Name" }] }, { "column": "12", "body": [{ "tag": "p", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, { "tag": "button-popup", "id": "3", "headerText": "Popup from Slider22", "buttonText": "Simple Popup 4", "content": [{ "column": "12", "body": [{ "tag": "p", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." }, { "tag": "p", "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }] }] }] }] }] }, { "column": "9", "body": [{ "tag": "p", "content": "sssssssssLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }] }] }] },
    "grid": { "tag": "grid", "url": "abc.com", "id": "user-grid", "headerOfGrid": "All Users", "form": { "id": { "type": "text", "lable": "ID", "placeHolder": "Type in ID", "show": ["view"] }, "fname": { "type": "text", "lable": "First Name", "placeHolder": "Type in First Name", "show": ["add", "edit", "list", "view"], "validation": [{ "validateKey": "required", "msg": "Please enter first name" }] }, "lname": { "type": "text", "lable": "Last Name", "placeHolder": "Type in Last Name", "show": ["add", "edit", "list", "view"], "validation": [{ "validateKey": "required", "msg": "Please enter last name" }] }, "age": { "type": "number", "lable": "Age", "placeHolder": "Type in Age", "show": ["add", "edit", "list", "view"], "validation": [{ "validateKey": "required", "msg": "Please enter age" }, { "validateKey": "min", "val": 18, "msg": "Age should be greater than 18 years" }, { "validateKey": "max", "val": 99, "msg": "Age should less than 99 years" }] } }, "headerOperation": [{ "callFunction": "add", "tooltips": "Click here to add", "buttonText": [{ "type": "icon", "value": "fa fa-plus" }, { "type": "text", "value": "Add User" }], "headerText": "Add a User", "class": "btn-primary", "operationOnPopup": [{ "callFunction": "save", "tooltips": "Click here to save", "class": "btn-warning", "buttonText": [{ "type": "icon", "value": "fa fa-save" }, { "type": "text", "value": "Insert" }] }, { "callFunction": "close", "tooltips": "Click here to close", "class": "btn-danger", "buttonText": [{ "type": "icon", "value": "fa fa-close" }, { "type": "text", "value": "Close" }] }] }, { "callFunction": "download", "tooltips": "Click here to download", "bodyText": "Please click on the Formats you want to download ...", "operationOnPopup": [{ "callFunction": "close", "tooltips": "Click here to close", "class": "btn-danger", "buttonText": [{ "type": "icon", "value": "fa fa-close" }, { "type": "text", "value": "Close" }] }, { "callFunction": "download-as-csv", "tooltips": "Click here to download", "class": "btn-primary", "buttonText": [{ "type": "icon", "value": "fa fa-download" }, { "type": "text", "value": "CSV" }] }, { "callFunction": "download-as-xlx", "tooltips": "Click here to download", "class": "btn-primary", "buttonText": [{ "type": "icon", "value": "fa fa-download" }, { "type": "text", "value": "XLX" }] }], "buttonText": [{ "type": "icon", "value": "fa fa-download" }, { "type": "text", "value": "Download" }], "headerText": "Download all Users", "class": "btn-warning" }], "operation": [{ "callFunction": "edit", "operationOnPopup": [{ "callFunction": "update", "tooltips": "Click here to save", "class": "btn-warning", "buttonText": [{ "type": "icon", "value": "fa fa-save" }, { "type": "text", "value": "Update" }] }, { "callFunction": "close", "tooltips": "Click here to close", "class": "btn-danger", "buttonText": [{ "type": "icon", "value": "fa fa-close" }, { "type": "text", "value": "Close" }] }], "tooltips": "Click here to edit", "headerText": "Edit User", "class": "btn-primary", "buttonText": [{ "type": "icon", "value": "fa fa-pencil-square-o" }] }, { "callFunction": "view", "operationOnPopup": [{ "callFunction": "close", "tooltips": "Click here to close", "class": "btn-danger", "buttonText": [{ "type": "icon", "value": "fa fa-close" }, { "type": "text", "value": "Close" }] }], "tooltips": "Click here to view", "headerText": "View User", "class": "btn-success", "buttonText": [{ "type": "icon", "value": "fa fa-eye" }] }, { "callFunction": "delete", "operationOnPopup": [{ "callFunction": "close", "tooltips": "Click here to close", "class": "btn-primary", "buttonText": [{ "type": "icon", "value": "fa fa-close" }, { "type": "text", "value": "No" }] }, { "callFunction": "confirm-delete", "tooltips": "Click here to close", "class": "btn-danger", "buttonText": [{ "type": "icon", "value": "fa fa-check" }, { "type": "text", "value": "Yes" }] }], "tooltips": "Click here to Delete", "headerText": "Delete User", "bodyText": "Are you sure you want to Delete this user?", "class": "btn-danger", "buttonText": [{ "type": "icon", "value": "fa fa-trash" }] }, { "redirectTo": "<1>/view/<ID>", "tag": "redirection", "class": "btn-success", "buttonText": [{ "type": "icon", "value": "fa fa-eye" }] }], "records": [{ "fname": "Sovan", "lname": "Dey", "age": "37", "id": "1" }, { "fname": "Sannidhya Dey Masanta", "lname": "Dey", "age": "5", "id": "2" }, { "fname": "Luna", "lname": "Masanta", "age": "31", "id": "3" }] },
    "card": {
      "tag": "card", "content": [
        { "column": "4", "body": [{ "tag": "new" }] },
        { "column": "8", "body": [{ "tag": "new" }] }
      ]
    }
  }

  layoutJSON: any = {
    "json": {
      "content": [{
        "column": "12",
        "body": []
      }]
    },
    "index": ["content"]
  }

  selectedJSON: any = {};

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
      "headerText": "Add a Accordion"
    },
    {
      "value": "breadcumb",
      "text": "Breadcumb",
      "headerText": "Add a Breadcumb"
    },
    {
      "value": "grid",
      "text": "Grid",
      "headerText": "Add a Grid"
    }
  ];


  widgetHeader: string = '';
  formValue: any = {};
  // reference to the MatMenuTrigger in the DOM 
  constructor(private ElByClassName: ElementRef) { }



  ngOnInit(): void {
    document.getElementById('body')?.classList.add('selectedWidget');
    this.selectedWidget = 'body';
  }


  getS7evenID(event: any) {
    var S7evenID = event.getAttribute('S7evenID');
    if (S7evenID == "" || S7evenID == null) {
      S7evenID = this.getS7evenID(event.parentNode);
    }
    return S7evenID;
  }

  createLeftPanel() {
    this.widgetHeader = !Array.isArray(this.selectedJSON) ? this.selectedJSON['tag'] : "";

  }
  createColumn() {
    this.selectedJSON['content'].push({ "column": "6", "body": [{ "tag": "new" }] })
  }
  deleteColumn(columnIndex: number) {
    this.selectedJSON['content'].splice(columnIndex, 1)
  }
  sortColumn(columnIndex: number, toColumnIndex: number){
    console.log(columnIndex, toColumnIndex)
    let data = this.selectedJSON['content'][toColumnIndex];
    this.selectedJSON['content'][toColumnIndex] = this.selectedJSON['content'][columnIndex];
    this.selectedJSON['content'][columnIndex] = data;
  }

  mouseEvent(event: any) {

    switch (event['type']) {



      case "mousemove": {
        const boxes = document.querySelectorAll('.showSelectedSpace');
        boxes.forEach(box => {
          box.classList.remove('showSelectedSpace');
        });
        this.mouseMoveTargetID = this.getS7evenID(event.target);
        var targetID = this.mouseMoveTargetID.split('-');
        if (this.mouseMoveTargetID != undefined && this.mouseMoveTargetID != null && this.mouseMoveTargetID != "") {
          if (this.onMouseOverBorder.indexOf(targetID[0]) != -1) {
            document.getElementById(this.mouseMoveTargetID)?.classList.add('showSelectedSpace');
          }
        }
        break;
      }


      case "mousedown": { //Keydown
        var targetID = this.mouseMoveTargetID.split('-');
        this.dragableWidget = "";
        if (targetID[0] == 'sidebar') {
          this.dragableWidget = targetID[1];
        } else if (this.canBeSelected.indexOf(targetID[0]) != -1) {
          this.selectedWidget = this.mouseMoveTargetID;
          const boxes = document.querySelectorAll('.selectedWidget');
          boxes.forEach(box => {
            box.classList.remove('selectedWidget');
          });
          document.getElementById(this.selectedWidget)?.classList.add('selectedWidget');
          //document.getElementById(this.selectedWidget)?.parentElement?.parentElement?.classList.add('selectedWidget');

          var data: any = this.layoutJSON["json"];
          this.selectedWidget.split('-').map((key: any, index: any) => {
            if (index !== 0 && key !== undefined && key !== "") {
              data = data[key];
            }
          })
          this.selectedJSON = data;
          this.createLeftPanel();
        } else {
          console.log(targetID[0])
        }
        break;
      }



      case "mouseup": { //Drop
        var targetID = this.mouseMoveTargetID.split('-');
        let newPageJSON = this.layoutJSON['json'];
        if (targetID[targetID.length - 1] != 'body' && targetID[targetID.length - 1] != 'body') {
          targetID.pop();
        }
        targetID.map((key: any, index: any) => {
          if (index !== 0 && key !== undefined && key !== "") {
            newPageJSON = newPageJSON[key];
            //console.log(newPageJSON)
          }
        });
        //console.log(newPageJSON)
        var where = targetID[(targetID.length) - 1];
        //console.log(this.mouseMoveTargetID)


        if (this.dragableWidgetArray.indexOf(this.dragableWidget) !== -1) {
          if (where === 'body') {
            if (newPageJSON.length > 0 && newPageJSON['0']['tag'] == 'new') {
              newPageJSON.pop();
            }
            newPageJSON.push(JSON.parse(JSON.stringify(this.theme[this.dragableWidget])));
          } else if (where == 'content') {
            newPageJSON.push({ "column": "12", "body": [JSON.parse(JSON.stringify(this.theme[this.dragableWidget]))] });
          }
        } else {
          //console.log(this.dragableWidget);
          console.log(this.dragableWidget + ' confifuration required ...')
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
