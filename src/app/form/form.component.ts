import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { formValidation } from '../form.validation.component';
@Component({
  selector: 'S7Form',
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class FormComponent implements OnChanges {
  @Input() jsonData: any;
  @Input() action: any;
  @Input() record: any;
  @Input() hookToGrid: any;
  @Output() formChild = new EventEmitter<string>();

  headers: any = [];
  formDataImage: any;
  constructor() { }
  formValue: any = {};
  loading: any = []


  validForm: boolean = true;
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
        let errorMSG = formValidation.validate(value, eachValidation['validateKey'], eachValidation['msg'], eachValidation['val']);
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


  actionOnForm(jsonData: any) {
    if (jsonData['validation']) {
      this.validForm = true;
      Object.keys(this.formDataImage).map((boxName: string) => {
        if (!this.validateEachField(boxName)) {
          this.validForm = false;
        }
      })
      if (this.validForm) {
        let returnData: any = { "tag": jsonData['callFunction'], "formValue": this.formValue };
        this.formChild.emit(returnData);
      }
    } else {
      let returnData: any = { "tag": jsonData['callFunction'] };
      this.formChild.emit(returnData);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'jsonData' || propName == 'record') {
        this.formDataImage = JSON.parse(JSON.stringify(this.jsonData['data']));
        this.headers = Object.keys(this.formDataImage);

        Object.keys(this.record).map((key: any) => { //Filling value for edit and view
          this.formValue[key] = this.record[key] ? this.record[key] : "";
        });


        this.headers.map((key: any) => { //Put validation data on the form
          this.formDataImage[key]['valid'] = { "class": "", "message": "" };
          this.formValue[key] = this.record[key] ? this.record[key] : ""; //Filling value for add
        });
      } else if (propName == 'action') {
        if (this.action['action'] == 'loading' && this.action['loading'] == true && this.loading.indexOf(this.action['button']) == -1) {
          this.loading.push(this.action['button']);
        } else {
          this.loading.pop(); //Remove by index
        }
      }
    }
  }
}
