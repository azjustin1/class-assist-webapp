import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Folder } from './models/folder.model';

@Injectable()
export class FolderService {
	private folderSubject: Subject<number> = new Subject<number>();

	public selectedFolderId$ = this.folderSubject.asObservable();

	constructor(private httpClient: HttpClient) {}

	updateSelectedFolderId(id: number) {
		this.folderSubject.next(id);
	}

	getAllFolder(): Observable<Folder[]> {
		return this.httpClient.get<Folder[]>('api/folder');
	}

	getChildFoldersByParentId(parentId: number): Observable<Folder> {
		return this.httpClient.get<Folder>(`api/folder/${parentId}`);
	}
}
