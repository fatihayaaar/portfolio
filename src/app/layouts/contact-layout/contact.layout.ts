import {Component, HostListener, OnInit} from "@angular/core";
import {TranslatePipe} from "../../core/pipe/translate.pipe";
import {FooterComponent} from "../../components/footer/footer.component";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-contact-layout',
    templateUrl: 'contact.layout.html',
    styleUrls: ['contact.layout.scss'],
    standalone: true,
    imports: [
        TranslatePipe,
        FooterComponent,
        NgIf
    ]
})
export class ContactLayout implements OnInit {
    screenWidth: number = 0;

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
}
