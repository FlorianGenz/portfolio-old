import { Component } from '@angular/core';
import {PortfolioComponent} from "../portfolio.component";

@Component({
  selector: 'app-pong-text',
  templateUrl: './pong-text.component.html',
  styleUrls: ['./pong-text.component.scss']
})
export class PongTextComponent {
  constructor(public portfolio: PortfolioComponent) {
  }

}
