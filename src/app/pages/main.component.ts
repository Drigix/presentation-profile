import {Component, Input, OnInit, signal} from '@angular/core';
import {COMMON_IMPORTS, CUSTOM_COMPONENTS} from '../shared/primeng-module-import';
import {Profile} from '../models/profile.model';
import {Tooltip} from 'primeng/tooltip';
import {MenuItem} from '../models/menu-item.model';

@Component({
  selector: 'main-view',
  templateUrl: 'main.component.html',
  standalone: true,
  styleUrls: ['./main.component.scss'],
  imports: [COMMON_IMPORTS, CUSTOM_COMPONENTS, Tooltip]
})
export class MainComponent{

  @Input() profile?: Profile;
  @Input() selectedMenuItem?: MenuItem;
}
