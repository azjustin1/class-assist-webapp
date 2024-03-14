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

	addNewFolder(folder: Folder): Observable<Folder> {
		return this.httpClient.post<Folder>('api/folder', folder);
	}

	editFolder(folder: Folder): Observable<Folder> {
		return this.httpClient.put<Folder>('api/folder', folder);
	}

	deleteFolder(folderId: number): Observable<boolean> {
		return this.httpClient.delete<boolean>(`api/folder/${folderId}`);
	}

	getChildFoldersByParentId(parentId: number): Observable<Folder[]> {
		return this.httpClient.get<Folder[]>(`api/folder/${parentId}`);
	}
}
