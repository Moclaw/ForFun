import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
@Injectable()
export class LoginserviceService {
	constructor(private router: Router) { }
	login(password: string) {
		if (this.encodepassword(password) === environment.passhomielam) {
			this.router.navigate(['/homieoflam']);
		}
		else if (this.encodepassword(password) === environment.passlover) {
			this.router.navigate(['/loveroflam']);
		}
		else if (this.encodepassword(password) === environment.sorrylover) {
			this.router.navigate(['/sorrylover']);
		}
		else {
			console.log(this.encodepassword(password));
			this.router.navigate(['/']);
		}
	}
	encodepassword(password: string) {
		return btoa(password);
	}
}
