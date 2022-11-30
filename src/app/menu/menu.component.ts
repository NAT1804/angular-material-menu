import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() menus: MenuItem[];
  constructor() {}

  ngOnInit() {}

  objectKeys = Object.keys;
}
