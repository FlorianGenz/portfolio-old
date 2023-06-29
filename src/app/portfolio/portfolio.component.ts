import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  darkmode: boolean = true;

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
      let temp;
      temp = getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor");
      document.documentElement.style.setProperty("--backgroundColor", getComputedStyle(document.documentElement).getPropertyValue("--fontColor"));
      document.documentElement.style.setProperty("--fontColor", temp);

      document.getElementById("home")!.style.content = "url('/assets/svg/home-iconDark.svg')";
      document.getElementById("gitHub")!.style.content = "url('/assets/svg/gitHubDark.svg')";
      document.getElementById("mail")!.style.content = "url('/assets/svg/mailDark.svg')";
      document.getElementById("darkBrightMode")!.style.content = "url('/assets/svg/sunDark.svg')";
      this.darkmode = false;
    }else{
      let temp;
      temp = getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor");
      document.documentElement.style.setProperty("--backgroundColor", getComputedStyle(document.documentElement).getPropertyValue("--fontColor"));
      document.documentElement.style.setProperty("--fontColor", temp);

      document.getElementById("home")!.style.content = "url('/assets/svg/home-iconWhite.svg')";
      document.getElementById("gitHub")!.style.content = "url('/assets/svg/gitHubWhite.svg')";
      document.getElementById("mail")!.style.content = "url('/assets/svg/mailWhite.svg')";
      document.getElementById("darkBrightMode")!.style.content = "url('/assets/svg/sunWhite.svg')";
      this.darkmode = true;
    }
  }

}
