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

	currentPageURL: string = '';
	popupJSON: any = {};

	constructor(private router: Router, private route1: ActivatedRoute, private appService: AppService) {
		this.appService.postData('/main/navbar').subscribe(jsonData => {
			this.pageStructure['menuData'] = jsonData;
		});
		this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe(event => {
			this.pageStructure['pageData'] = { 'content': [] };
			this.appService.postData(this.router.url).subscribe(jsonData => {
				this.currentPageURL = this.router.url;
				this.pageStructure['pageData'] = jsonData;
				sessionStorage.setItem('currentPage', JSON.stringify(jsonData));
				//console.log(sessionStorage.getItem('currentPage'));
			});
		});
	}

	callParent(sendJSON: any) {
		switch (sendJSON['tag']) {
			case "button-popup": {
				this.popupJSON = JSON.parse(JSON.stringify(this.pageStructure['pageData']));
				this.popupStructure[1] = { 'index': sendJSON['index'], 'json': this.pageStructure['pageData'] };
				
				break;
			}			
			case "form": {
				this.popupStructure[1] = JSON.parse(JSON.stringify({ 'index': sendJSON['index'], 'json': this.pageStructure['pageData']}));
				break;
			}
			case "database": {
				console.log(JSON.stringify(sendJSON));
				break;
			}
			case "action-popup": {
				this.popupStructure[1] = sendJSON;
				break;
			}
			case "close": {
				console.log(sendJSON);
				break;
			}
			case "save": {
				console.log(sendJSON);
				break;
			}
			case "action-popup": {
				this.popupStructure[1] = sendJSON;
				break;
			}
			case "redirection": {
				//console.log(sendJSON['redirectTo'], this.currentPageURL);
				var URLSegment = sendJSON['redirectTo'].split('/');
				var currentURLArray = this.currentPageURL.split('/');
				URLSegment.map((eachSegment: any, index: number) => {
					//console.log(eachURL, currentURLArray)
					switch (eachSegment) {
						case "<1>": {
							URLSegment[index] = currentURLArray[1];
							break;
						}
						case "<ID>": {
							URLSegment[index] = '1';
							break;
						}
					}
				});
				this.router.navigate([URLSegment.join("/")]);
				break;
			}
			default: {
				this.router.navigate([sendJSON['URL']]);
				break;
			}
		}
	}



}
