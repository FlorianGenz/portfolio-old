import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutTextComponent } from './portfolio/main-page/about-text/about-text.component';
import { WeatherAppTextComponent } from './weather-app-text/weather-app-text.component';
import { PongTextComponent } from './pong-text/pong-text.component';
import { ProjectsComponent } from './portfolio/main-page/projects/projects.component';
import {NgOptimizedImage} from "@angular/common";
import {provideRouter} from "@angular/router";
import { MainPageComponent } from './portfolio/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutTextComponent,
    WeatherAppTextComponent,
    PongTextComponent,
    ProjectsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [PortfolioComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
