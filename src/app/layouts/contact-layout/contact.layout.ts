import {Component} from "@angular/core";
import {TranslatePipe} from "../../core/pipe/translate.pipe";

@Component({
    selector: 'app-contact-layout',
    templateUrl: 'contact.layout.html',
    styleUrls: ['contact.layout.scss'],
    standalone: true,
    imports: [
        TranslatePipe
    ]
})
export class ContactLayout {
}
