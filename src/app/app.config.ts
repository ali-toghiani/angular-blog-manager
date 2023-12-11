import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {QuillModule} from "ngx-quill";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(QuillModule.forRoot()),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    importProvidersFrom(BrowserAnimationsModule),
  ]
};
