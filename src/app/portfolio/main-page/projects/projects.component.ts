import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  slideIndex = 0

  constructor(public router: Router) {
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

}

