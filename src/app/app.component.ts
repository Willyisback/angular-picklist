import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [
    {title: 'TEST1'},
    {title: 'TEST2'},
    {title: 'TEST3'},
    {title: 'TEST4'},
    {title: 'TEST5'}
  ];

  selectedItems = [];
}
