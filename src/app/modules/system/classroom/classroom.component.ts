import { Component } from '@angular/core';
import { FolderService } from '../../folder/folder.service';
import { ClassroomService } from './classroom.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.css'
})
export class ClassroomComponent {
  constructor(
    private readonly classroomService: ClassroomService
  ) {

  }
}
