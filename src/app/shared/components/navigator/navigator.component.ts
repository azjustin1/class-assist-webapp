import { Component, EventEmitter, Output } from '@angular/core';

export interface MenuItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css'],
})
export class NavigatorComponent {
  menu: MenuItem[] = [
    { name: 'User management', path: '/user-management' },
    { name: 'Role management', path: '/role-management' },
  ];

  @Output() onMenuItemClick = new EventEmitter();

  constructor() {}


  onNavigate() {
    this.onMenuItemClick.emit();
  }
}
