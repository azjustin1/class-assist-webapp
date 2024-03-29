import { inject } from '@angular/core';

import {
	ActivatedRouteSnapshot,
	CanActivateFn,
	Router,
	RouterStateSnapshot,
} from '@angular/router';

export const authGuard: CanActivateFn = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	const router = inject(Router);
	const token = localStorage.getItem('access_token');
	if (!token) {
		router.navigate(['signin']);
		return false;
	}
	return true;
};
