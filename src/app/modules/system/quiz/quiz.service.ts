import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './models/quiz.model';
import { Observable } from 'rxjs';

@Injectable()
export class QuizService {
	constructor(private httpClient: HttpClient) {}

	getById(id: number): Observable<Quiz> {
		return this.httpClient.get<Quiz>(`api/quiz/${id}`);
	}

	getByFolderId(folderId: number): Observable<Quiz[]> {
		return this.httpClient.get<Quiz[]>(`api/quiz/folder/${folderId}`);
	}

	createNewQuiz(quiz: Quiz): Observable<Quiz> {
		return this.httpClient.post<Quiz>('api/quiz', quiz);
	}

	editQuiz(quiz: Quiz) {
		return this.httpClient.put<Quiz>('api/quiz', quiz);
	}
}
