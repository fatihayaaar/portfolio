import {Component} from "@angular/core";
import {TranslatePipe} from "../../core/pipe/translate.pipe";

@Component({
    selector: "app-header-component",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"],
    standalone: true,
    imports: [
        TranslatePipe
    ]
})
export class HeaderComponent {

}
