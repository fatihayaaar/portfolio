import {Component, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";
import {DownloadButtonComponent} from "../../components/downloand-button/download-button.component";
import {AvatarComponent} from "../../components/avatar/avatar.component";
import {TranslatePipe} from "../../core/pipe/translate.pipe";
import {NgClass, NgIf} from "@angular/common";

@Component({
    selector: 'app-profile-layout',
    templateUrl: 'profile.layout.html',
    styleUrls: ['profile.layout.scss'],
    standalone: true,
    imports: [DownloadButtonComponent, AvatarComponent, TranslatePipe, NgClass, NgIf]
})
export class ProfileLayout implements OnInit {
    @Input() fullName: String | undefined;
    @Input() title: String | undefined;
    @Input() description: string = "";
    @Output() showPdfOnClick = new EventEmitter();
    imageLoaded = false;
    screenWidth: number = 0;

    showPdf() {
        this.showPdfOnClick.emit();
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

    downloadFile(fileName: string): void {
        const link = document.createElement('a');
        link.href = `assets/${fileName}`;
        link.download = fileName;
        link.click();
    }

    formatDescription(description: string): string {
        return description.replace(/\n/g, '<br>');
    }

    onImageLoad() {
        this.imageLoaded = true;
    }
}
