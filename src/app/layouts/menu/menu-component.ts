import {Component, OnInit, signal} from '@angular/core';
import {COMMON_IMPORTS, PRIMENG_OVERLAY_COMPONENTS} from '../../shared/primeng-module-import';
import {MenuItem} from '../../models/menu-item.model';
import {Tooltip} from 'primeng/tooltip';

@Component({
  selector: 'menu-view',
  templateUrl: 'menu-component.html',
  styleUrls: ['./menu-component.scss'],
  standalone: true,
  imports: [COMMON_IMPORTS, PRIMENG_OVERLAY_COMPONENTS]
})
export class MenuComponent  implements OnInit {

  menuItems = signal<MenuItem[]>([]);
  selectedMenuItem = signal<MenuItem | null>(null);

  ngOnInit(): void {
    this.menuItems.set(this.loadMenuOptions());
    this.selectedMenuItem.set(this.menuItems()[0]);
  }

  onMenuItemSelect(menuItem: any): void {
    this.selectedMenuItem.set(menuItem);
  }

  private loadMenuOptions(): any[] {
    return [
      {
        key: 'profile',
        label: 'menu.profile',
        icon: 'pi pi-user'
      },
      {
        key: 'aboutme',
        label: 'menu.aboutMe',
        icon: 'pi pi-home'
      },
      {
        key: 'education',
        label: 'menu.education',
        icon: 'pi pi-graduation-cap'
      },
      {
        key: 'experience',
        label: 'menu.professionalExperience',
        icon: 'pi pi-briefcase',
      },
      {
        key: 'course',
        label: 'menu.courses',
        icon: 'pi pi-lightbulb',
      },
      {
        key: 'skills',
        label: 'menu.skills',
        icon: 'pi pi-sparkles'
      }
    ]
  }
}
