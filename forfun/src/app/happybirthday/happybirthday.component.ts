import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormcontactComponent } from '../modal/Form/formcontact/formcontact.component';

@Component({
	selector: 'app-happybirthday',
	templateUrl: './happybirthday.component.html',
	styleUrls: ['./happybirthday.component.sass'],

})


export class HappybirthdayComponent implements OnInit {
	hideButton: boolean = false;
	hideBoom: boolean = false;
	hideImage = true;
	hidform = false;
	button = true;
	modalRef: MdbModalRef<FormcontactComponent> | null = null;

	constructor(private modalService: MdbModalService) { }
	ngOnInit(): void {
		this.modalRef = this.modalService.open(FormcontactComponent)

	}
	click() {
		this.hideButton = true;
		setTimeout(() => {
			this.button = false;
		}
			, 5000);
	}
	open() {
		this.hideImage = false;
		this.button = true;
		setTimeout(() => {
			this.hideBoom = true;
		}, 500);
	}
	randomButtonPosition() {

	}
	timeshowform() {
		setTimeout(() => {
			this.hideButton = true;
		}, 5000);
		this.modalRef = this.modalService.open(FormcontactComponent)
		this.hidform = true;
	}

}
