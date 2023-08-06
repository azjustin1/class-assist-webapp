import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor() {}
}
