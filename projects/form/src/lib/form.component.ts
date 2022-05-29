import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'S7Form',
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class FormComponent implements OnChanges {
  @Input() jsonData: any;
  @Input() operation: any;
  @Input() record: any;
  @Output() formChild = new EventEmitter<string>();

  headers: any = [];
  formDataImage: any;
  constructor() { }
  formValue: any = {};

  validateEachField(boxName: string) {
    for (var i = 0; i < this.formDataImage[boxName]["validation"].length; i++) {
      let eachValidation = this.formDataImage[boxName]["validation"][i];
      this.formDataImage[boxName]['valid']['message'] = '';
      this.formDataImage[boxName]['valid']['class'] = '';

      //Get the value 
      var value = "";
      if (this.formDataImage[boxName]['type'] == 'number') {
        if (this.formValue[boxName] == null) {
          value = '';
        } else {
          value = this.formValue[boxName]
        }
      } else {
        value = this.formValue[boxName].trim();
      }


      //Validation starts
      let errorMSG = "";
      switch (eachValidation['validateKey']) {
        case "required": {
          if (value == "" || value == null) {
            errorMSG = eachValidation['msg'];
          }
          break;
        }
        case "min": {
          if (value != "" && parseInt(value) < parseInt(eachValidation['val'])) {
            errorMSG = eachValidation['msg'];
          }
          break;
        }
        case "max": {
          if (value != "" && parseInt(value) > parseInt(eachValidation['val'])) {
            errorMSG = eachValidation['msg'];
          }
          break;
        }
      }
      if (!errorMSG && value != "") {
        this.formDataImage[boxName]['valid']['message'] = "";
        this.formDataImage[boxName]['valid']['class'] = 'is-valid';
      } else if (errorMSG) {
        this.formDataImage[boxName]['valid']['message'] = errorMSG;
        this.formDataImage[boxName]['valid']['class'] = 'is-invalid';
        break;
      }
    }
  }

  ngOnChanges() {
    this.formDataImage = JSON.parse(JSON.stringify(this.jsonData));
    this.headers = Object.keys(this.formDataImage);
    //Putting default validation message in the object
    this.headers.map((key: any) => {
      this.formDataImage[key]['valid'] = { "class": "", "message": "" };
      this.formValue[key] = this.record[key] ? this.record[key] : ""; //Filling value for edit and view
    });
  }
}
