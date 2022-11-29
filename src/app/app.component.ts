import { Component, VERSION } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  my_menu = of({
    main1: ['sub1', 'sub2'],
    main2: ['sub1', 'sub2', 'sub3'],
  });
}
