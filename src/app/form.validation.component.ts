import {Injectable} from '@angular/core';
@Injectable()

export class formValidation {
	

	public static validate(value: string, validateKey: string, eachValidationMSG: string, eachValidationValue: string) {
		let errorMSG: any ={};
		switch (validateKey) {
			case "required": {
			  if (value == "" || value == null) {
				errorMSG = eachValidationMSG;
			  }
			  break;
			}
			case "min": {
			  if (value != "" && parseInt(value) < parseInt(eachValidationValue)) {
				errorMSG = eachValidationMSG;
			  }
			  break;
			}
			case "max": {
			  if (value != "" && parseInt(value) > parseInt(eachValidationValue)) {
				errorMSG = eachValidationMSG;
			  }
			  break;
			}
		  }
		  return errorMSG;
	}

}
