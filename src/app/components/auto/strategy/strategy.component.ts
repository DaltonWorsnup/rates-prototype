import { Component } from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent {
  display: boolean = true;
}
