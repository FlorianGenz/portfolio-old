import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutTextComponent} from './portfolio/main-page/about-text/about-text.component';
import {ProjectsComponent} from './portfolio/main-page/projects/projects.component';
import {MainPageComponent} from './portfolio/main-page/main-page.component';
import {MatIconModule} from "@angular/material/icon";
import { LegalNoticeComponent } from './portfolio/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './portfolio/privacy-policy/privacy-policy.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { SkillsComponent } from './portfolio/main-page/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutTextComponent,
    ProjectsComponent,
    MainPageComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent,
    ProjectComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [PortfolioComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
