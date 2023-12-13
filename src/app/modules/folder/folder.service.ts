import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Folder } from './models/folder.model';

@Injectable()
export class FolderService {
  constructor(private httpClient: HttpClient) { }
  

  getAllFolder(): Observable<Folder[]> {
    return this.httpClient.get<Folder[]>('api/folder')
  }
}