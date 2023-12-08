import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutTextComponent} from './portfolio/main-page/about-text/about-text.component';
import {WeatherAppTextComponent} from './portfolio/weather-app-text/weather-app-text.component';
import {PongTextComponent} from './portfolio/pong-text/pong-text.component';
import {ProjectsComponent} from './portfolio/main-page/projects/projects.component';
import {MainPageComponent} from './portfolio/main-page/main-page.component';
import {MatIconModule} from "@angular/material/icon";
import { LegalNoticeComponent } from './portfolio/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './portfolio/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutTextComponent,
    WeatherAppTextComponent,
    PongTextComponent,
    ProjectsComponent,
    MainPageComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [PortfolioComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
