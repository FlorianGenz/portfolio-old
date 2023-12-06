import { Component } from '@angular/core';
import {PortfolioComponent} from "../portfolio/portfolio.component";

@Component({
  selector: 'app-weather-app-text',
  templateUrl: './weather-app-text.component.html',
  styleUrls: ['./weather-app-text.component.scss']
})
export class WeatherAppTextComponent {
  constructor(public portfolio: PortfolioComponent) {
  }
}
