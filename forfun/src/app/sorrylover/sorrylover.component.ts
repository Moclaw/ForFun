import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sorrylover',
	templateUrl: './sorrylover.component.html',
	styleUrls: ['./sorrylover.component.sass']
})
export class SorryloverComponent implements OnInit {

	constructor() { }
	imageSrc: any = ["../../assets/image/lover/1.JPG",
		"../../assets/image/lover/2.JPG",
		"../../assets/image/lover/3.JPG",
		"../../assets/image/lover/4.JPG",
		"../../assets/image/lover/5.JPG",
		"../../assets/image/lover/6.JPG",
	]
	isDisabled: boolean = false;
	ngOnInit(): void {


	}
}
