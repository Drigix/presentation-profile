import {Component, OnInit, signal, ViewChild, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Profile} from './models/profile.model';
import {ProfileHelper} from './shared/helpers/profile.helper';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {MainComponent} from './pages/main.component';
import {MenuComponent} from './layouts/menu/menu-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, MainComponent, MenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('presentation-profile');

  @ViewChild('menuComponent') menuComponent!: MenuComponent;
  @ViewChild('navbarComponent') navbarComponent!: NavbarComponent;
  @ViewChild('mainViewComponent') mainViewComponent!: MainComponent;

  profile: WritableSignal<Profile> = signal<Profile>(new Profile());

  ngOnInit(): void {
    this.profile.set(ProfileHelper.buildProfile());
  }
}
