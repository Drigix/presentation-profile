import {Component, Input, OnInit, signal} from '@angular/core';
import {COMMON_IMPORTS, CUSTOM_COMPONENTS, PRIMENG_OVERLAY_COMPONENTS} from '../shared/primeng-module-import';
import {Profile} from '../models/profile.model';
import {MenuItem} from '../models/menu-item.model';

@Component({
  selector: 'main-view',
  templateUrl: 'main.component.html',
  standalone: true,
  styleUrls: ['./main.component.scss'],
  imports: [COMMON_IMPORTS, CUSTOM_COMPONENTS, PRIMENG_OVERLAY_COMPONENTS]
})
export class MainComponent{

  @Input() profile?: Profile;

  @Input()
  set selectedMenuItem(selectedMenuItem: MenuItem) {
    this.animateMenuItemClass = 'animate__animated animate__fadeOutBottomRight';
    setTimeout(() => {
      this.animateMenuItemClass = 'animate__animated animate__lightSpeedInLeft';
      this._selectedMenuItem = selectedMenuItem;
    }, 400);
  }

  get selectedMenuItem(): MenuItem | undefined {
    return this._selectedMenuItem;
  }

  set animateMenuItemClass(animateMenuItemClass: string) {
    this._animateMenuItemClass = animateMenuItemClass;
  }

  get animateMenuItemClass(): string | undefined {
    return this._animateMenuItemClass;
  }

  private _selectedMenuItem?: MenuItem;
  private _animateMenuItemClass?: string;
}
