import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AppService } from "./app.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'expirement';
	popupStructure: any = {};

	pageStructure = {
		"pageData": { 'content': [] },
		"menuData": {}
	};

	constructor(private router: Router, private route1: ActivatedRoute, private appService: AppService) {
		this.appService.postData('/main/navbar').subscribe(jsonData => {
			this.pageStructure['menuData'] = jsonData;
		});
		this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe(event => {
			this.pageStructure['pageData'] = { 'content': [] };
			this.appService.postData(this.router.url).subscribe(jsonData => {
				this.pageStructure['pageData'] = jsonData;
			});
		});
	}
	callParent(sendJSON: any) {

		switch (sendJSON['tag']) {
			case "button-popup": {
				this.popupStructure[sendJSON['id']] = sendJSON;
				break;
			}
			case "action-popup": {
				this.popupStructure[1] = sendJSON;
				break;
			}
			default: {
				this.router.navigate([sendJSON['URL']]);
				break;
			}
		}
	}



}
