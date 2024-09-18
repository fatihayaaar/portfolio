import {Component} from "@angular/core";
import {TranslatePipe} from "../../core/pipe/translate.pipe";
import {TranslateService} from "../../core/services/translate.service";
import {NgIf} from "@angular/common";

@Component({
    selector: "app-header-component",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"],
    standalone: true,
    imports: [
        TranslatePipe,
        NgIf
    ]
})
export class HeaderComponent {
    language: string = "en";

    constructor(private translator: TranslateService) {
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
