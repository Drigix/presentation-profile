import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePl);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
