import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {WeatherAppTextComponent} from "./weather-app-text/weather-app-text.component";
import {MainPageComponent} from "./portfolio/main-page/main-page.component";
import {PongTextComponent} from "./pong-text/pong-text.component";

const routes: Routes = [
  {path: 'weatherApp', component: WeatherAppTextComponent},
  {path: 'pong', component: PongTextComponent},
  {path: '**' , component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
