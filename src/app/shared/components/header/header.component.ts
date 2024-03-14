import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';
import { HeaderService } from './header.service';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Output() sidenav = new EventEmitter();

	constructor(
		private router: Router,
		private httpClient: HttpClient,
		private dialog: MatDialog,
		private headerService: HeaderService
	) {}

	toggleSidenav() {
		this.sidenav.emit();
	}

	goToHome() {
		this.router.navigateByUrl('/');
	}

	openLoginDialog(): void {
		const dialogRef = this.dialog.open(LoginDialogComponent, {});

		dialogRef.afterClosed().subscribe();
	}

	test() {
		this.headerService.getUser().subscribe((res) => {
			console.log(res);
		});
	}

	refreshToken() {
		this.headerService.refreshToken().subscribe((res) => {
			console.log(res);
		});
	}
}
