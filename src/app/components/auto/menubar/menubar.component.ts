import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {label: 'Event Strategy'},
              {label: 'Team Strategy'},
              {label: 'Venue Strategy'},
            ]
          },
          {label: 'Open'},
          {label: 'Save'},
          {label: 'Save As'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-question-circle',
        style: {'margin-left': 'auto'}
      }
    ];
  }
}
