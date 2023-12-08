import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {WeatherAppTextComponent} from "./portfolio/weather-app-text/weather-app-text.component";
import {MainPageComponent} from "./portfolio/main-page/main-page.component";
import {PongTextComponent} from "./portfolio/pong-text/pong-text.component";
import {LegalNoticeComponent} from "./portfolio/legal-notice/legal-notice.component";
import {PrivacyPolicyComponent} from "./portfolio/privacy-policy/privacy-policy.component";

const routes: Routes = [
  {path: 'weatherApp', component: WeatherAppTextComponent},
  {path: 'pong', component: PongTextComponent},
  {path: 'legalNotice', component: LegalNoticeComponent},
  {path: 'privacyPolicy', component: PrivacyPolicyComponent},
  {path: '**' , component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
