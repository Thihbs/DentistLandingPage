import {  NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Certifique-se de importar FormsModule
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyVideoComponent } from './body-video/body-video.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { CardEspecialidadesComponent } from './especialidades/card-especialidades/card-especialidades.component';
import { SobreComponent } from './sobre/sobre.component';
import { LocationComponent } from './location/location.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { CadastroModalComponent } from './cadastro-modal/cadastro-modal.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyVideoComponent,
    EspecialidadesComponent,
    CardEspecialidadesComponent,
    SobreComponent,
    LocationComponent,
    ButtonComponentComponent,
    CadastroModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
