import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
	selector: 'app-formcontact',
	templateUrl: './formcontact.component.html',
	styleUrls: ['./formcontact.component.sass']
})
export class FormcontactComponent implements OnInit {
	isDone: boolean = false;
	constructor(public modalRef: MdbModalRef<FormcontactComponent>) { }
	ngOnInit(): void {
	}
	okay(name: any, phone: any) {
		if (name.value != '' && phone.value != '') {
			this.isDone = true;
			this.modalRef.close(this);
		}
		alert('Please fill in the form');

	}

}
