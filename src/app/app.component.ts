import { Component, VERSION } from '@angular/core';
import { of } from 'rxjs';
import { MenuItem } from './menu/menu-item.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  menus: MenuItem[] = [
    {
      name: 'Filter',
      children: [
        {
          name: 'Vertebrates',
          children: [
            {
              name: 'Fish',
              children: [
                {
                  name: 'Baikal oilfish',
                },
              ],
            },
            {
              name: 'Amphibians',
              children: [
                {
                  name: 'Sonoran desert toad',
                },
              ],
            },
            {
              name: 'Reptiles',
              children: [
                {
                  name: 'Banded Day Gecko',
                },
                {
                  name: 'Banded Gila Monster',
                },
              ],
            },
          ],
        },
        {
          name: 'No children',
        },
      ],
    },
  ];

  my_menu = of(this.menus);
}
