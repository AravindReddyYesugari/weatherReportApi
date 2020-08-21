import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherAppComponent } from "./weather-app/weather-app.component";
const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'main', component: WeatherAppComponent },
  { path: '**', component: WeatherAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
