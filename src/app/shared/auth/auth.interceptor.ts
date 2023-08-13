import { Injectable } from '@angular/core'
import {
	HttpInterceptor,
	HttpEvent,
	HttpHandler,
	HttpRequest,
	HTTP_INTERCEPTORS,
} from '@angular/common/http'
import { Observable } from 'rxjs'

const BASE_URL = 'http://localhost:8082'
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (!request.url.includes('/assets/i18n/')) {
			const api = request.clone({
				url: `${BASE_URL}/${request.url}`,
				withCredentials: true,
			})
			return next.handle(api)
		}
		return next.handle(request)
	}
}

export const AuthProvider = {
	provide: HTTP_INTERCEPTORS,
	useClass: AuthInterceptor,
	multi: true,
}
