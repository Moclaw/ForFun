import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-happybirthday',
	templateUrl: './happybirthday.component.html',
	styleUrls: ['./happybirthday.component.sass'],

})


export class HappybirthdayComponent implements OnInit {
	hideButton: boolean = false;
	hideBoom: boolean = false;
	hideImage = true;
	button = true;
	constructor() { }
	ngOnInit(): void {
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

}
