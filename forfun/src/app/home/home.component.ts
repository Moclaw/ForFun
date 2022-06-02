import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginComponent } from '../modal/login/login.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	modalRef: MdbModalRef<LoginComponent> | null = null;

	constructor(private modalService: MdbModalService) { }

	openModal() {
		this.modalRef = this.modalService.open(LoginComponent)
	}

	ngOnInit(): void {
	}

}
