import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { WeatherAppTextComponent } from './weather-app-text/weather-app-text.component';
import { PongTextComponent } from './pong-text/pong-text.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutTextComponent,
    WeatherAppTextComponent,
    PongTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
