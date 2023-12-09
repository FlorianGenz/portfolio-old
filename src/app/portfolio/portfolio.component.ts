import {Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
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
export class PortfolioComponent{
  emailFirstPart: string = "kontakt";
  emailSecondPart: string = "floriangenz";
  emailThirdPart: string = "de"

  constructor(public router: Router) {
  }

  public log(event: any) {
    document.getElementById("cursor")!.style.opacity = "1";
    document.getElementById("cursor")!.style.left = event.x  + "px";
    document.getElementById("cursor")!.style.top = event.y  + "px";
  }

  hideMouse(){
    document.getElementById("cursor")!.style.opacity = "0";
  }

  changeMouse(isSmall: boolean){
    if (isSmall){
      document.getElementById("cursor")!.classList.add("bigCursor")
    }else{
      document.getElementById("cursor")!.classList.remove("bigCursor");
    }
  }

  mouseEnterText(){
    document.getElementById("cursor")!.classList.add("hoverCursor");
  }

  mouseLeaveText(){
    document.getElementById("cursor")!.classList.remove("hoverCursor");
  }
}
