import {Component} from "@angular/core";
import {TranslatePipe} from "../../core/pipe/translate.pipe";

@Component({
    selector: "app-footer-component",
    templateUrl: "footer.component.html",
    styleUrls: ["footer.component.scss"],
    standalone: true,
    imports: [
        TranslatePipe
    ]
})
export class FooterComponent {

}
