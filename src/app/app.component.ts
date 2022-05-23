import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'expirement';
	popupStructure: any = {};
	redirectURL(URL: string) {
		console.log("Redirect To: " + URL)
	}

	callParent(sendJSON: any) {
		
		switch (sendJSON['tag']) {
			case "button-popup": {
				this.popupStructure[sendJSON['id']] = sendJSON;
				break;
			}
			default: {
				console.log(sendJSON)
				break;
			}
		}
	}


	pageStructure = {
		"pageData": {
			"header": "My page",
			"content": [{
				"column": "6",
				"body": [{
					"tag": "h3",
					"content": "UM"
				}, {
					"tag": "p",
					"content": "UM p1"
				}, {
					"tag": "p",
					"content": "UM p2"
				}]
			}, {
				"column": "6",
				"body": [{
					"tag": "h3",
					"content": "Role Management"
				}, {
					"tag": "p",
					"content": "Role Management p1"
				}, {
					"tag": "card",
					"content": [{
						"column": "6",
						"body": [{
							"tag": "h3",
							"content": "UM"
						}, {
							"tag": "button-popup",
							"id": "1",
							"buttonText": "Login",
							"headerText": "Signin",
							"content": [{
								"column": "6",
								"body": [{
									"tag": "h3",
									"content": "UM"
								}, {
									"tag": "p",
									"content": "UM p1"
								}, {
									"tag": "p",
									"content": "UM p2"
								}]
							}, {
								"column": "6",
								"body": [{
									"tag": "h3",
									"content": "UM"
								}, {
									"tag": "p",
									"content": "UM p1"
								}, {
									"tag": "button-popup",
									"id": "2",
									"buttonText": "Loginsssss",
									"headerText": "Signinsssss",
									"content": [{
										"column": "6",
										"body": [{
											"tag": "h3",
											"content": "UM"
										}, {
											"tag": "p",
											"content": "UM p1"
										}, {
											"tag": "p",
											"content": "UM p2"
										}]
									}]
								}, {
									"tag": "card",
									"content": [{
										"column": "6",
										"body": [{
											"tag": "h3",
											"content": "UM"
										}, {
											"tag": "p",
											"content": "UM p1"
										}, {
											"tag": "p",
											"content": "UM p2"
										}]
									}, {
										"column": "6",
										"body": [{
											"tag": "h3",
											"content": "UM"
										}, {
											"tag": "p",
											"content": "UM p1"
										}, {
											"tag": "p",
											"content": "UM p2"
										}]
									}]
								}]
							}]
						}, {
							"tag": "p",
							"content": "UM p1"
						}, {
							"tag": "p",
							"content": "UM p2"
						}]
					}, {
						"column": "6",
						"body": [{
							"tag": "h3",
							"content": "UM"
						}, {
							"tag": "p",
							"content": "UM p1"
						}, {
							"tag": "card",
							"content": [{
								"column": "6",
								"body": [{
									"tag": "h3",
									"content": "UM"
								}, {
									"tag": "p",
									"content": "UM p1"
								}, {
									"tag": "p",
									"content": "UM p2"
								}]
							}, {
								"column": "6",
								"body": [{
									"tag": "h3",
									"content": "UM"
								}, {
									"tag": "p",
									"content": "UM p1"
								}, {
									"tag": "p",
									"content": "UM p2"
								}]
							}]
						}]
					}]
				}]
			}]
		},
		"menuData": {
			"logoText": "S7even",
			"searchText": "Search",
			"searcBox": true,
			"profile": {
				"icon": "fa fa-user",
				"align": "left",
				"menu": [{
					"menuText": "My profile",
					"URL": "my-profile"
				}, {
					"menuText": "Logout",
					"tag": "button-popup",
					"id": "1",
					"headerText": "Are you sure you want to logout?",
					"content": [{
						"column": "6",
						"body": [{
							"tag": "h3",
							"content": "UM"
						}, {
							"tag": "p",
							"content": "UM p1"
						}, {
							"tag": "p",
							"content": "UM p2"
						}]
					}]
				}, {
					"menuText": "ssss",
					"menu": [{
						"menuText": "My profile",
						"tag": "button-popup",
						"id": "1",
						"headerText": "Are you sure you want to logout?",
						"content": [{
							"column": "6",
							"body": [{
								"tag": "h3",
								"content": "UM"
							}, {
								"tag": "p",
								"content": "UM p1"
							}, {
								"tag": "p",
								"content": "UM p2"
							}]
						}]
					}, {
						"menuText": "My profile",
						"URL": "my-profile"
					}, {
						"menuText": "Logout",
						"menu": [{
							"menuText": "My profile",
							"URL": "my-profile"
						}, {
							"menuText": "Logout",
							"tag": "button-popup",
							"id": "1",
							"headerText": "Are you sure you want to logout?",
							"content": [{
								"column": "6",
								"body": [{
									"tag": "h3",
									"content": "UM"
								}, {
									"tag": "p",
									"content": "UM p1"
								}, {
									"tag": "p",
									"content": "UM p2"
								}]
							}]
						}]
					}]
				}]
			},
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
					"menuText": "POPUP",
					"tag": "button-popup",
					"id": "1",
					"headerText": "Are you sure you want to logout?",
					"content": [{
						"column": "6",
						"body": [{
							"tag": "h3",
							"content": "UM"
						}, {
							"tag": "p",
							"content": "UM p1"
						}, {
							"tag": "p",
							"content": "UM p2"
						}]
					}]
				}, {
					"menuText": "BB2",
					"menu": [{
						"menuText": "POPUP",
						"tag": "button-popup",
						"id": "1",
						"headerText": "Are you sure you want to logout?",
						"content": [{
							"column": "6",
							"body": [{
								"tag": "h3",
								"content": "UM"
							}, {
								"tag": "p",
								"content": "UM p1"
							}, {
								"tag": "p",
								"content": "UM p2"
							}]
						}]
					}, {
						"menuText": "CC2",
						"URL": "cc2"
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
		}
	};
}
