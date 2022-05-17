import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'expirement';
	menuData = {
		"logoText": "S7even",
		"searchText": "Searchs",
		"searcBox": true,
		"menu": [{
			"menuText": "Hom1e",
			"URL": "home"
		}, {
			"menuText": "Link1",
			"URL": "link"
		}, {
			"menuText": "AA",
			"menu": [{
				"menuText": "BB",
				"URL": "bb"
			}, {
				"menuText": "BB1 BB1 BB1 BB1BB1 BB1 BB1 ",
				"URL": "bb1"
			}, {
				"menuText": "BB2",
				"menu": [{
					"menuText": "CC1",
					"URL": "bb"
				}, {
					"menuText": "CC2",
					"URL": "bb1"
				}, {
					"menuText": "CC3",
					"menu": [{
						"menuText": "cc4",
						"URL": "cc4"
					}, {
						"menuText": "cc5",
						"URL": "cc5"
					}, {
						"menuText": "cc6",
						"menu": [{
							"menuText": "dd1",
							"URL": "dd1"
						}, {
							"menuText": "dd2",
							"URL": "dd2"
						}, {
							"menuText": "dd3",
							"menu": [{
								"menuText": "ee",
								"URL": "ee"
							}, {
								"menuText": "ee1",
								"URL": "ee1"
							}, {
								"menuText": "ee3",
								"URL": "ee3"
							}]
						}, {
							"menuText": "dd44",
							"URL": "dd244"
						}]
					}]
				}]
			}, {
				"menuText": "BB3",
				"URL": "bb1"
			}]
		}]
	};
}
