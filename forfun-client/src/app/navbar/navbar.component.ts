import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../modal/login/login.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
	ngOnInit(): void {
	}
	modalRef: MdbModalRef<LoginComponent> | null = null;

	constructor(private modalService: MdbModalService) { }

	openModal() {
		this.modalRef = this.modalService.open(LoginComponent)
	}
}

