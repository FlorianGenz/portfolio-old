import { Component } from '@angular/core';
import {PortfolioComponent} from "../portfolio.component";

@Component({
  selector: 'app-about-text',
  templateUrl: './about-text.component.html',
  styleUrls: ['./about-text.component.scss']
})
export class AboutTextComponent {
  constructor(public portfolio: PortfolioComponent) {
  }
}
