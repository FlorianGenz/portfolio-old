import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

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
    ])
  ]
})
export class PortfolioComponent implements OnInit{

  darkmode: boolean = true;
  content: string = "main";

  ngOnInit(): void {
    if (localStorage.getItem("theme") != null && localStorage.getItem("theme") != "dark") {
      this.changeBrightnessMode();
    }
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

  changeBrightnessMode(){
    if (this.darkmode){
      let tempBackgroundColor;
      let tempGradient;
      tempBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor");
      tempGradient = getComputedStyle(document.documentElement).getPropertyValue("--mainGradient");
      document.documentElement.style.setProperty("--backgroundColor", getComputedStyle(document.documentElement).getPropertyValue("--fontColor"));
      document.documentElement.style.setProperty("--fontColor", tempBackgroundColor);
      document.documentElement.style.setProperty("--mainGradient", getComputedStyle(document.documentElement).getPropertyValue("--minorGradient"));
      document.documentElement.style.setProperty("--minorGradient", tempGradient);

      document.getElementById("home")!.style.content = "url('/assets/svg/home-iconDark.svg')";
      document.getElementById("gitHub")!.style.content = "url('/assets/svg/gitHubDark.svg')";
      document.getElementById("mail")!.style.content = "url('/assets/svg/mailDark.svg')";
      document.getElementById("darkLightMode")!.style.content = "url('/assets/svg/moon.svg')";

      localStorage.setItem("theme", "light");
      this.darkmode = false;
    }else{
      let tempBackgroundColor;
      let tempGradient;
      tempBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor");
      tempGradient = getComputedStyle(document.documentElement).getPropertyValue("--mainGradient");
      document.documentElement.style.setProperty("--backgroundColor", getComputedStyle(document.documentElement).getPropertyValue("--fontColor"));
      document.documentElement.style.setProperty("--fontColor", tempBackgroundColor);

      document.getElementById("home")!.style.content = "url('/assets/svg/home-iconWhite.svg')";
      document.getElementById("gitHub")!.style.content = "url('/assets/svg/gitHubWhite.svg')";
      document.getElementById("mail")!.style.content = "url('/assets/svg/mailWhite.svg')";
      document.getElementById("darkLightMode")!.style.content = "url('/assets/svg/sun.svg')";
      document.documentElement.style.setProperty("--mainGradient", getComputedStyle(document.documentElement).getPropertyValue("--minorGradient"));
      document.documentElement.style.setProperty("--minorGradient", tempGradient);


      localStorage.setItem("theme", "dark");
      this.darkmode = true;
    }
  }
}
