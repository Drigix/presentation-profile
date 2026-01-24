import {Component, Input} from '@angular/core';
import {Profile} from '../../models/profile.model';
import {COMMON_IMPORTS, PRIMENG_OVERLAY_COMPONENTS} from '../../shared/primeng-module-import';
import {UrlUtils} from '../../shared/utils/url.utils';
import {MenuItem} from '../../models/menu-item.model';
import {DateUtils} from '../../shared/utils/date.utils';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  standalone: true,
  imports: [COMMON_IMPORTS, PRIMENG_OVERLAY_COMPONENTS],
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  readonly DateUtils = DateUtils;

  @Input() profile?: Profile;
  @Input() styleClass?: string = 'top-navbar';

  @Input() set selectedMenuItem(menuItem: MenuItem | undefined) {
    this._selectedMenuItem = menuItem;
    if (!menuItem) {
      this.styleClass = 'middle-navbar';
    } else if (menuItem.key === 'profile') {
      this.styleClass = 'middle-navbar';
    } else {
      this.styleClass = 'top-navbar';
    }
  }

  get selectedMenuItem(): MenuItem | undefined {
    return this._selectedMenuItem;
  }

  private _selectedMenuItem?: MenuItem;

  openPage(url: string): void {
    UrlUtils.openPage(url)
  }

  protected readonly Date = Date;
}
