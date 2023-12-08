import { Component } from '@angular/core';
import {PortfolioComponent} from "../portfolio.component";

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {

  constructor(public portfolio: PortfolioComponent) {
  }
}
