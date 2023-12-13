import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClassroomService {
  constructor(private httpClient: HttpClient) { }
  
}