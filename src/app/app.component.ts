import {Component, Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {ProfileLayout} from "./layouts/profile-layout/profile.layout";
import {DOCUMENT, NgIf} from "@angular/common";
import {ThemeService} from "./core/services/theme.service";
import {ScrollAnimatorDirective} from "./core/directives/scroll-animator.directive";
import {ExperienceLayout} from "./layouts/experience-layout/experience.layout";
import {ContactLayout} from "./layouts/contact-layout/contact.layout";
import {EducationLayout} from "./layouts/education-layout/education.layout";
import {ProjectsLayout} from "./layouts/projects-layout/projects.layout";
import {ScrollTopTopComponent} from "./components/scroll-to-top/scroll-top-top.component";
import {TranslatePipe} from "./core/pipe/translate.pipe";
import {TranslateService} from "./core/services/translate.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProfileLayout, NgIf, ScrollAnimatorDirective, ExperienceLayout, ContactLayout, EducationLayout, ProjectsLayout, ScrollTopTopComponent, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor(protected themeService: ThemeService, @Inject(DOCUMENT) protected document: Document, private translator: TranslateService) {
    document.body.setAttribute('data-theme', themeService.getIsDarkTheme() ? "dark" : "light");
    document.body.style.backgroundColor = 'var(--background-color)';
  }

  onClickTheme() {
    this.themeService.toggleTheme();
  }

  switchLanguage() {
    if (this.translator.getCurrentLanguage() == "tr") {
      this.translator.use('en');
    } else {
      this.translator.use('tr');
    }
  }
}
