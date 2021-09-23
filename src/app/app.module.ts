import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { HeaderComponent } from './components/header/header.component';
import { ConsultaCreateComponent } from './pages/consultas/consulta-create/consulta-create.component';

import { InterceptorModule } from './interceptor.module';


@NgModule({
  declarations: [
    AppComponent,
    ConsultasComponent,
    HeaderComponent,
    ConsultaCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    HttpClientModule,
    BrowserModule,
    InterceptorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
