import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { LoginserviceService } from 'src/services/loginservice.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

	constructor(public modalRef: MdbModalRef<LoginComponent>, private service: LoginserviceService) { }
	ngOnInit(): void {
	}
	login(password: string) {
		this.service.login(password);
		this.modalRef.close();
	}
}
