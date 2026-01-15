import {Component, Input} from '@angular/core';
import {Profile} from '../../models/profile.model';
import {COMMON_IMPORTS} from '../../shared/primeng-module-import';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  standalone: true,
  imports: [COMMON_IMPORTS],
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  @Input() profile?: Profile;
}
