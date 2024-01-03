import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-library',
	templateUrl: './library.component.html',
	styleUrl: './library.component.css',
})
export class LibraryComponent {
	constructor(private router: Router) {}

	onAddNewQuiz() {
		this.router.navigate(['/quiz']);
	}
}
