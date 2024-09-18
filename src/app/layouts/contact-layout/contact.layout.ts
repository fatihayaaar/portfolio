import {Component} from "@angular/core";
import {TranslatePipe} from "../../core/pipe/translate.pipe";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
    selector: 'app-contact-layout',
    templateUrl: 'contact.layout.html',
    styleUrls: ['contact.layout.scss'],
    standalone: true,
    imports: [
        TranslatePipe,
        FooterComponent
    ]
})
export class ContactLayout {
}
