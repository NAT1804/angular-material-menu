import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from '../menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input() items: MenuItem[];
  @ViewChild('childMenu') public childMenu;

  constructor() {}

  ngOnInit() {}
}
