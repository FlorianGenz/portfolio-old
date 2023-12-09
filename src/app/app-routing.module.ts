import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./portfolio/main-page/main-page.component";
import {LegalNoticeComponent} from "./portfolio/legal-notice/legal-notice.component";
import {PrivacyPolicyComponent} from "./portfolio/privacy-policy/privacy-policy.component";
import {ProjectComponent} from "./portfolio/project/project.component";

const routes: Routes = [
  {path: 'Wetter-App', component: ProjectComponent},
  {path: 'Pong', component: ProjectComponent},
  {path: 'TicTacToe', component: ProjectComponent},
  {path: 'legalNotice', component: LegalNoticeComponent},
  {path: 'privacyPolicy', component: PrivacyPolicyComponent},
  {path: '**' , component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
