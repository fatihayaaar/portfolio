import {Component, Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {ProfileLayout} from "./layouts/profile-layout/profile.layout";
import {DOCUMENT, NgIf} from "@angular/common";
import {ThemeService} from "./core/services/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProfileLayout, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(protected themeService: ThemeService, @Inject(DOCUMENT) protected document: Document) {
    document.body.setAttribute('data-theme', themeService.getIsDarkTheme() ? "dark" : "light");
    document.body.style.backgroundColor = 'var(--background-color)';
  }

  onClickTheme() {
    this.themeService.toggleTheme();
  }
}
