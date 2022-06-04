import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { login } from 'src/services/model/login.model';
import { LoginService } from 'src/services/service/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
	@ViewChild('password') pass: ElementRef | undefined;
	constructor(public modalRef: MdbModalRef<LoginComponent>, private loginservice: LoginService) { }
	ngOnInit(): void {
	}
	login(str: string) {
		this.loginservice.login(str);
		this.modalRef.close();
	}

}
