import {Component, Input, OnInit, signal} from '@angular/core';
import {COMMON_IMPORTS, CUSTOM_COMPONENTS} from '../shared/primeng-module-import';
import {Profile} from '../models/profile.model';
import {Tooltip} from 'primeng/tooltip';

@Component({
  selector: 'main-view',
  templateUrl: 'main.component.html',
  standalone: true,
  styleUrls: ['./main.component.scss'],
  imports: [COMMON_IMPORTS, CUSTOM_COMPONENTS, Tooltip]
})
export class MainComponent implements OnInit{

  @Input() profile?: Profile;

  menuItems = signal<any[]>([]);
  selectedMenuItem = signal<any>(null);

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
