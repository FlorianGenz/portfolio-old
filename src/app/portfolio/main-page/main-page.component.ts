import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PortfolioComponent} from "../portfolio.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(public router: Router, public portfolio: PortfolioComponent) {
  }
}
