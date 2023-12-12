import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable()
export class UserManagementService {
	constructor(private httpClient: HttpClient) {}

	getAllUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>('rest/users');
	}

	addNewUser(newUser: User) {
		return this.httpClient.post<User>('rest/users', newUser);
	}
}
