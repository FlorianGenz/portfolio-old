import { Component } from '@angular/core';
import {PortfolioComponent} from "../portfolio.component";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {

  constructor(public portfolio: PortfolioComponent) {
  }
}
