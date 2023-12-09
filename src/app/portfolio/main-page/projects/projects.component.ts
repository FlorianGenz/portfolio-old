import { Component } from '@angular/core';
import {Router} from "@angular/router";
import projects from "../../../../assets/projects.json";
import {PortfolioComponent} from "../../portfolio.component";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, height: 0}),
        animate(300, style({ opacity: 1, height: "100%" })),
      ]),
      transition(':leave', [
        style({ display: "none" }),
        animate(300, style({ display: "none" }))
      ])
    ]),
    trigger('inAnimation', [
      transition(':enter', [
        style({ width: 0, height: 0}),
        animate("0.3s ease-in-out", style({ width: "0", height: "100%" })),
        animate("0.3s ease-in-out", style({width: "100vw", height: "100%"}))
      ])
    ])
  ]
})
export class ProjectsComponent {

  slideIndex = 0

  constructor(public router: Router, public portfolio: PortfolioComponent) {
  }

  plusSlides(n: number) {
    this.slideIndex += n;
    if (this.slideIndex >= document.getElementsByClassName("project").length){
      this.slideIndex = 0;
    }
    if (this.slideIndex < 0){
      this.slideIndex = document.getElementsByClassName("project").length - 1;
    }
  }

  protected readonly projects = projects;
}

