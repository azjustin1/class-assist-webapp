import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

export const authGuard: CanActivateFn = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	console.log('Guard')
	const router = inject(Router)
	const token = localStorage.getItem('access_token')
	console.log(token)
	if (!token) {
		router.navigate(['signin'])
		return false
	}
	return true
}
