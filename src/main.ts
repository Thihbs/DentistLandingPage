import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';


// Carrega a chave do Google Maps
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsKey}`;
document.head.appendChild(script);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
