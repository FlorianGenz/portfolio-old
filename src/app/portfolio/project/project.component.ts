import {Component, OnInit} from '@angular/core';
import {PortfolioComponent} from "../portfolio.component";
import projects from "../../../assets/projects.json";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  project = {
    "name": "",
    "text": [""],
    "links": {
      "img": "",
      "gitHub": "",
      "website": ""
    }
  }
  constructor(public portfolio: PortfolioComponent, public router: Router) {
  }

  ngOnInit() {
    let url = this.router.url;
    url = url.replaceAll("/", "");
    let project = projects.projects.at(this.getProjectIndex(url));
    this.project.name = project!.name;
    this.project.text = project!.text;
    this.project.links = project!.links;
  }

  getProjectIndex(name: string){
    for (let i = 0; i < projects.projects.length; i++){
      if (projects.projects.at(i)!.name == name){
        return i;
      }
    }
    return -1;
  }
}
