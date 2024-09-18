import {Component} from "@angular/core";
import {TranslatePipe} from "../../core/pipe/translate.pipe";
import {TranslateService} from "../../core/services/translate.service";
import {NgClass, NgIf} from "@angular/common";

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
export class HeaderComponent {
    language: string = "en";
    isMenuOpen = false;

    constructor(private translator: TranslateService) {
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
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
}
