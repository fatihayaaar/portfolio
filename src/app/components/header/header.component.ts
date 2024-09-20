import {Component, HostListener, OnInit} from "@angular/core";
import {TranslatePipe} from "../../core/pipe/translate.pipe";
import {TranslateService} from "../../core/services/translate.service";
import {NgClass, NgIf} from "@angular/common";
import {ThemeService} from "../../core/services/theme.service";

@Component({
    selector: "app-header-component",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"],
    standalone: true,
    imports: [
        TranslatePipe,
        NgIf,
        NgClass
    ]
})
export class HeaderComponent implements OnInit {
    language: string = "en";
    isMenuOpen = false;
    screenWidth: number = 0;

    constructor(private translator: TranslateService, protected themeService: ThemeService) {
    }

    ngOnInit(): void {
        this.getScreenWidth();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any): void {
        this.getScreenWidth();
    }

    getScreenWidth(): void {
        this.screenWidth = window.innerWidth;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        if (this.isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }

    switchLanguage() {
        if (this.translator.getCurrentLanguage() == "tr") {
            this.language = "en";
            this.translator.use('en');
        } else {
            this.language = "tr";
            this.translator.use('tr');
        }
    }

    onClickTheme() {
        this.themeService.toggleTheme();
    }
}
