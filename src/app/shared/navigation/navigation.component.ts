import { Component, EventEmitter, Output } from '@angular/core';

export interface MenuItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
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
