import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginComponent } from '../modal/login/login.component';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

	modalRef: MdbModalRef<LoginComponent> | null = null;

	constructor(private modalService: MdbModalService) { }
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

	openModal() {
		this.modalRef = this.modalService.open(LoginComponent)
	}

}
