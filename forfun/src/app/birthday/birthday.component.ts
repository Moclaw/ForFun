import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-birthday',
	templateUrl: './birthday.component.html',
	styleUrls: ['./birthday.component.sass']
})
export class BirthdayComponent implements OnInit {
	shand = document.getElementById('btn') as HTMLButtonElement;
	constructor() {
	}
	button: any;
	isButton: boolean = false;
	ngOnInit(): void {
		setTimeout(() => {
			this.isButton = true;
		}, 5500);
	}
	onClick() {
		console.log(this.shand);

	}
	changePositions() {
	}
}
