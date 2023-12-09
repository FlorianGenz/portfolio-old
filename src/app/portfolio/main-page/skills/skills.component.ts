import { Component } from '@angular/core';
import {PortfolioComponent} from "../../portfolio.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor(public portfolio: PortfolioComponent) {
  }

}
