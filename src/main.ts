import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import 'zone.js'; // Included with Angular CLI, but a hack to run on StackBlitz

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
