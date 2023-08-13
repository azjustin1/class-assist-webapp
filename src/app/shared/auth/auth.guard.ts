import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class AuthGuard {
	canActivate(): Observable<boolean> | Promise<boolean> | boolean {
		return true
	}
}
