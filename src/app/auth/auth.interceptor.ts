import {
	HTTP_INTERCEPTORS,
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AUTHENTICATION } from 'src/app/utils/constant';

const BASE_URL = 'http://localhost:8082';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const accessToken = localStorage.getItem(AUTHENTICATION.ACCESS_TOKEN);
		if (!request.url.includes('/assets/i18n/')) {
			const api = request.clone({
				url: `${BASE_URL}/${request.url}`,
				setHeaders: { Authorization: `Bearer ${accessToken}` },
			});
			return next.handle(api).pipe(
				catchError((error) => {
					if (
						error instanceof HttpErrorResponse &&
						error.status === 401
					) {
						this.handle401Exception(error);
					}
					return of(error);
				})
			);
		}
		return next.handle(request);
	}

	handle401Exception(error: HttpErrorResponse) {
	}
}

export const AuthProvider = {
	provide: HTTP_INTERCEPTORS,
	useClass: AuthInterceptor,
	multi: true,
};
