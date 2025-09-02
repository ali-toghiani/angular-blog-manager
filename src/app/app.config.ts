import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {QuillModule} from "ngx-quill";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(QuillModule.forRoot()),
    importProvidersFrom(),
    provideAnimations(),
    importProvidersFrom(BrowserAnimationsModule),
  ]
};
