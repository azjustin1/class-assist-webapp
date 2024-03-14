import {
	HTTP_INTERCEPTORS,
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AUTHENTICATION } from 'src/app/utils/constant';
import { AuthService } from './auth.service';

const BASE_URL = 'http://localhost:8082';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	private isRefreshing = false;

	constructor(private authService: AuthService) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const accessToken = localStorage.getItem(AUTHENTICATION.ACCESS_TOKEN);
		request = request.clone({
			withCredentials: true,
		});
		if (!request.url.includes('/assets/i18n/')) {
			const api = request.clone({
				url: `${BASE_URL}/${request.url}`,
				setHeaders: { Authorization: `Bearer ${accessToken}` },
			});
			return next.handle(api).pipe(
				catchError((error) => {
					if (
						error instanceof HttpErrorResponse &&
						!request.url.includes('api/auth') &&
						error.status === 401
					) {
						this.handle401Exception(request, next);
					}
					return throwError(() => error);
				})
			);
		}
		return next.handle(request);
	}

	handle401Exception(request: HttpRequest<any>, next: HttpHandler) {
		this.authService.refreshToken().subscribe(res => {
			request = request.clone({
				url: `${BASE_URL}/${request.url}`,
				setHeaders: { Authorization: `Bearer ${res}` },
				withCredentials: true,
			})
			return next.handle(request)
		})
	}
}

export const AuthProvider = {
	provide: HTTP_INTERCEPTORS,
	useClass: AuthInterceptor,
	multi: true,
};
