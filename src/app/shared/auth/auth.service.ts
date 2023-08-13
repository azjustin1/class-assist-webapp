import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class AuthService {
	constructor(private httpClient: HttpClient) {}

	login(username: string, password: string): Observable<any> {
		const bodyRequest = {
			username: username,
			password: password,
		}
		return this.httpClient.post('rest/auth', bodyRequest)
	}

	getToken() {}

	setToken() {

	}
}
