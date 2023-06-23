import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

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
