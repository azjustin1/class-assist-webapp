import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private isLogin: boolean = false;

	constructor(private httpClient: HttpClient) {}

	login(username: string, password: string): Observable<any> {
		const bodyRequest = {
			username: username,
			password: password,
		};
		return this.httpClient.post('api/auth', bodyRequest);
	}

	refreshToken(): Observable<string> {
		return this.httpClient.get<string>('api/auth/refreshToken');
	}
}
