import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'S7Form',
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class FormComponent implements OnChanges {
  @Input() jsonData: any;
  @Input() operation: any;
  @Input() record: any;
  @Input() hookToGrid: any;
  @Output() formChild = new EventEmitter<string>();

  headers: any = [];
  formDataImage: any;
  constructor() { }
  formValue: any = {};

  validateEachField(boxName: string) {
    let isValid = true;
    if (this.formDataImage[boxName]["validation"] != undefined) {
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
          isValid = true;
        } else if (errorMSG) {
          this.formDataImage[boxName]['valid']['message'] = errorMSG;
          this.formDataImage[boxName]['valid']['class'] = 'is-invalid';
          isValid = false;
          break;
        }
      }
    }
    return isValid;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'hookToGrid') { //Sent form-value to parent
        if (changes[propName]['previousValue'] != undefined && changes[propName]['currentValue'] != 'doNotFire') { //If first time on load don't return form value to parent
          //console.log(changes[propName])
          let isFormValid: any = 'valid';


          Object.keys(this.formDataImage).map((key: any) => {
            if (isFormValid != 'invalid') { //Any fields validation faild form gets invalid
              isFormValid = this.validateEachField(key) ? 'valid' : 'invalid';
            }
          })
          var returnFormData: any = {};
          returnFormData['formValue'] = this.formValue;
          returnFormData['callFunction'] = this.operation['callFunction'];
          returnFormData['isFormValid'] = isFormValid;

          this.formChild.emit(returnFormData);
        }
      } else { //All other onChanges other than parent ask for submit form

        this.formDataImage = JSON.parse(JSON.stringify(this.jsonData));
        this.headers = Object.keys(this.formDataImage);

        Object.keys(this.record).map((key: any) => { //Filling value for edit and view
          this.formValue[key] = this.record[key] ? this.record[key] : "";
        });


        this.headers.map((key: any) => { //Put validation data on the form
          this.formDataImage[key]['valid'] = { "class": "", "message": "" };
          this.formValue[key] = this.record[key] ? this.record[key] : ""; //Filling value for add
        });
      }
    }
  }
}
