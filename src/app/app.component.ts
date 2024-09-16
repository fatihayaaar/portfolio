import {Component, HostListener, Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {ProfileLayout} from "./layouts/profile-layout/profile.layout";
import {DOCUMENT, NgClass, NgIf} from "@angular/common";
import {ThemeService} from "./core/services/theme.service";
import {ExperienceLayout} from "./layouts/experience-layout/experience.layout";
import {ContactLayout} from "./layouts/contact-layout/contact.layout";
import {EducationLayout} from "./layouts/education-layout/education.layout";
import {ProjectsLayout} from "./layouts/projects-layout/projects.layout";
import {ScrollTopTopComponent} from "./components/scroll-to-top/scroll-top-top.component";
import {TranslatePipe} from "./core/pipe/translate.pipe";
import {TranslateService} from "./core/services/translate.service";
import {PdfViewerComponent} from "./components/pdf-viewer/pdf-viewer.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProfileLayout, NgIf, ExperienceLayout, ContactLayout, EducationLayout, ProjectsLayout, ScrollTopTopComponent, TranslatePipe, NgClass, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isHeaderFixedShow: boolean = false;

  constructor(
      protected themeService: ThemeService,
      @Inject(DOCUMENT) protected document: Document,
      private translator: TranslateService,
      private dialog: MatDialog,
  ) {
    document.body.setAttribute('data-theme', themeService.getIsDarkTheme() ? "dark" : "light");
    document.body.style.backgroundColor = 'var(--background-color)';
  }

  openPdfViewer() {
    const pdfUrl = 'assets/fatih-ayar-cv.pdf';

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { url: pdfUrl };
    dialogConfig.enterAnimationDuration = '0ms';
    dialogConfig.exitAnimationDuration = '0ms';
    dialogConfig.hasBackdrop = false;

    this.dialog.open(PdfViewerComponent, dialogConfig);
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

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrollCheck();
  }

  scrollCheck(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;

    this.isHeaderFixedShow = scrollPosition >= windowHeight / 2;
  }
}
