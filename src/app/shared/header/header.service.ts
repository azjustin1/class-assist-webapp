import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class HeaderService {
	constructor(private httpClient: HttpClient) {}

	login(username: string, password: string) {
		const bodyRequest = {
			username: username,
			password: password,
		}
		return this.httpClient.post('rest/auth', bodyRequest)
	}

	getUser(): Observable<any> {
		return this.httpClient.get('rest/user', { withCredentials: true })
	}
}
