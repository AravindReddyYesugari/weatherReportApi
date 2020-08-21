import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {  FormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';


@NgModule({
  declarations: [
    
    AppComponent,
    WeatherAppComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
