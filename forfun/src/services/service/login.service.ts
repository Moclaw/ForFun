import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment.prod";

@Injectable()
export class LoginService {

	constructor(private router: Router) { }
	login(str: string) {
		if (this.stringToHex(str) === environment.passbirthday) {
			this.router.navigate(['/birthday']);
		}
	}
	public stringToHex(str: string) {
		var hex = '';
		for (var i = 0; i < str.length; i++) {
			hex += '' + str.charCodeAt(i).toString(16);
		}
		return hex;
	}
}
